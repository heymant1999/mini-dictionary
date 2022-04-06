module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'import'],
  rules: {
    'import/prefer-default-export': 0,
    'comma-dangle': 0,
    'no-unused-vars': 0,
    'react/react-in-jsx-scope': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'object-curly-newline': 0,
    'import/no-cycle': 0,
    'no-use-before-define': 0,
    'react/no-array-index-key': 0,
    'no-param-reassign': 0
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx', '.jsx']
      }
    }
  }
};
