const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
  rules: {
    "react/react-in-jsx-scope": RULES.OFF,
    "react/prop-types": RULES.WARN,
    "react/function-component-definition": RULES.OFF,
    "react/jsx-props-no-spreading": RULES.OFF,
    "react/jsx-filename-extension": RULES.OFF,
    "import/extensions": RULES.OFF,
    "import/no-unresolved": RULES.OFF,
  },
};
