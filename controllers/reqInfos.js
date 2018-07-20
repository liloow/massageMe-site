exports.reqInfos = req => {
  const data = {
    ip: req.ip,
    session_id: req.session.id,
    user_agent: req.get('User-Agent'),
    referer: req.get('Referrer'),
    host: req.hostname,
    path: req.path,
    user_id: req.current_user.id,
    server_version: constants.VERSION,
    is_a_bot: req.is_a_bot,
    bodyy: req.body,
  };
  return data;
};
