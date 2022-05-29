module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-unused-vars': 'warn',
        'prettier/prettier': 'warn',
    },
};
