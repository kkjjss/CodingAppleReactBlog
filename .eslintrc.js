module.exports = {
    root: true,
    env: {
        node: true,
    },
    plugins: ['prettier'],
    extends: 'react-app',
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    rules: {
        'no-unused-vars': 'warn',
        'prettier/prettier': 'warn',
    },
};
