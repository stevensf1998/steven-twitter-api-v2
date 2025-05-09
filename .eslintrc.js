module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  // add your custom rules here
  rules: {
    semi: ["error", "always"],
    "no-extra-semi": "error",
    "no-extra-parens": "off",
    "comma-dangle": ["error", "always-multiline"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "func-call-spacing": ["error", "never"],
    "no-console": "off",
    "no-unused-expression": "off",
    "no-useless-constructor": "off",
    "arrow-parens": "off",
    "no-use-before-define": "off",
    "no-return-assign": "off",
    "member-access": "off",
    "member-ordering": "off",
    "object-literal-sort-keys": "off",
    "no-trailing-spaces": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-extra-parens": ["off"],
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
      },
    ],
  },
};
