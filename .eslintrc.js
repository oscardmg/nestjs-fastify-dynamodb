module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "always",
        "asyncArrow": "always"
      }
    ],
    "keyword-spacing": "error",
    "space-infix-ops": "error",
    "comma-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "func-call-spacing": [
      "error",
      "never"
    ],
    "no-multi-spaces": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-regex-spaces": "error",
    "no-self-compare": "error",
    "no-shadow-restricted-names": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-unmodified-loop-condition": "error",
    "no-whitespace-before-property": "error",
    "rest-spread-spacing": [
      "error",
      "never"
    ],
    "semi-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "space-before-blocks": "error",
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-unary-ops": [
      2,
      {
        "words": true,
        "nonwords": false,
        "overrides": {
          "new": false,
          "++": false
        }
      }
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        "line": {
          "markers": [
            "/"
          ],
          "exceptions": [
            "-",
            "+"
          ]
        },
        "block": {
          "markers": [
            "!"
          ],
          "exceptions": [
            "*"
          ],
          "balanced": true
        }
      }
    ],
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "yield-star-spacing": [
      "error",
      "both"
    ],
    "no-multiple-empty-lines": [
      2,
      {
        "max": 2,
        "maxEOF": 1
      }
    ]
  }
};
