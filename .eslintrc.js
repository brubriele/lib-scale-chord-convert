module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error", 
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "camelcase": 2,
        // "id-length": 2, 
        "keyword-spacing": 1,
        "space-infix-ops": 1,
        "comma-spacing": 1,
        "space-before-blocks": 1,
        "spaced-comment": 1,
        "no-multi-spaces": 1,
        "space-in-parens": 1,
        "space-before-function-paren": 1,
        "func-call-spacing": 1,
        "no-multiple-empty-lines": 1,
        "padded-blocks": 1,
        "quotes": 1, //???
        "no-floating-decimal": 1,
        "object-property-newline": 1,
        "brace-style": 1,
        "eqeqeq": 1,
        "no-array-constructor": 1
    }
};