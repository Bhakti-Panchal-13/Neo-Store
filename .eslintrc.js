module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    "standard",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier" // Make sure Prettier comes last
  ],
  plugins: ["react", "react-hooks", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": ["error"],
    "react/react-in-jsx-scope": "off" // Next.js handles React import automatically
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
