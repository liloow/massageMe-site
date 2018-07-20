const bcrypt = require('bcrypt');
const {SALT_ROUNDS} = require('./CONST');

exports.hashPass = async function hashPass(password) {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});

const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

const toCamelCase = str => {
  let s =
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

exports.pick = pick;
exports.capitalize = capitalize;
exports.stripHTMLTags = stripHTMLTags;
exports.toCamelCase = toCamelCase;
exports.toSnakeCase = toSnakeCase;
