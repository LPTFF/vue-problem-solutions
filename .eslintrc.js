module.exports = {
    // "off"或者0     关闭规则关闭
    // "warn"或者1    在打开的规则作为警告（不影响退出代码）
    // "error"或者2   把规则作为一个错误（退出代码触发时为1）
    root: true,
    plugins: [
        'html'
    ],
    env: {
        'node': true,
        'mocha': true
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        'ecmaVersion': 2015,
        'sourceType': 'module',
        "parser": "babel-eslint"
    },
    extends: 'eslint:recommended',
    rules: {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-console": "off",
        "no-unused-vars": "off",
        'no-constant-condition': 0
    },
    "globals": {
        "localStorage": true,
        "window": true,
        "document": true
    }
};