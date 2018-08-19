module.exports = {
  extends: 'google',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'script',
  },
  rules: {
    'max-len': ['error', {code: 120, ignoreComments: true}],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
  },
};
