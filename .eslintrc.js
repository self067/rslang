module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  plugins: ['@babel', 'react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
    "import/resolver": {
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['src/'],
      }
    }
  },
  globals: {
    document: true,
    window: true,
    React: 'writable'
  },
};
