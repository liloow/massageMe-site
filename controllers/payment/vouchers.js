const db = require('../db');
const {getRandomBytes} = require('../utils/crypto');

async function createVoucher(req, res) {
  const {amount, delivery} = req.body;
  const purchasedBy = req.user.id || req.ip;
  const voucher = await getRandomBytes(3);

  await db.none(
    `--addVoucher
    INSERT INTO public.vouchers (reference, amount, purchased_by, delivery )
    VALUES ($1, $2, $3, $4)
  `,
    [voucher, amount, purchasedBy, delivery]
  );
  return res.json(voucher);
}

async function checkVoucher(req, res) {
  const {voucher} = req.body;

  const voucherEntry = await db.oneOrNone(
    `--getVoucher
    SELECT *
    FROM public.vouchers
    WHERE voucher = $1
  `,
    [voucher]
  );
  if (!voucherEntry) return res.status(422).json('INVALID VOUCHER');
  if (voucherEntry.redeemed) return res.status(422).json('VOUCHER ALREADY REDEEMED');
  if (voucherEntry.expire_at < Date.now()) return res.status(422).json('VOUCHER EXPIRED');

  voucherEntry.key = secureVoucher(voucher);

  return res.json(voucherEntry);
}

async function redeemVoucher(req, res) {
  const {voucher, key} = req.body;

  await db.task('redeem', async t => {
    const valid = await t.noneoneOrNone(
      `
    --closeTransaction
    UPDATE public.vouchers_pending
    SET completed_at = now()
    WHERE voucher = $1
    AND key = $2
    RETURNING voucher
  `,
      [voucher, key]
    );
    if (!valid) return res.status(403).json('TRANSACTION KEY MISMATCH');

    await t.none(
      `--redeemVoucher
    UPDATE public.vouchers
    SET redeemed IS TRUE, updated_at = now()
    WHERE voucher = $1
     `,
      [voucher]
    );
  });
  return res.json(Object.create(null));
}

async function secureVoucher(voucher) {
  const key = await getRandomBytes(10);

  await db.none(
    `--secureVoucher
    INSERT INTO public.vouchers_pending (voucher, key)
    VALUES ($1, $2)
     `,
    [voucher, key]
  );

  return key;
}

async function sendVoucher(req, res) {
  const {dispatch, voucher, delivery} = req.body;

  const voucherPDF = drawVoucher(voucher);

  if (delivery === 'email') {
    sendEmail(dispatch.to, dispatch.subject, dispatch.from, recipient.message, voucherPDF);
  } else {
    registerManualPostage(dispatch.adress, dispatch.from, recipient.message, voucherPDF);
  }

  await db.none(
    `--recordVoucher
    UPDATE public.vouchers
    SET dispatch = $2
    WHERE voucher = $1
     `,
    [voucher, dispatch]
  );

  return res.json({});
}

exports.createVoucher = createVoucher;
exports.checkVoucher = checkVoucher;
exports.redeemVoucher = redeemVoucher;
exports.secureVoucher = secureVoucher;
exports.sendVoucher = sendVoucher;
