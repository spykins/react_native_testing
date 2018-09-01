module.exports = {
    extends: [
        'plugin:react/recommended',
        'airbnb'
    ],
    parser: 'babel-eslint',
    plugins: [
     'detox',
      'jest',
    ],
    env: {
    'detox/detox': true,
      'jest/globals': true,
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      }
}