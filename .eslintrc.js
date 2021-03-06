module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    "linebreak-style": "off",
    "no-underscore-dangle": "off",
    "operator-linebreak": "off",
    "implicit-arrow-linebreak": "off",
    "no-console": "off",
    "no-undef": "off",
    "consistent-return": "off",
    "no-prototype-builtins": "off",
  },
};
