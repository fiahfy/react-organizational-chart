module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['@fiahfy/react'],
  rules: {
    'react/display-name': 'off',
    'react/jsx-sort-props': 'error',
    'react/prop-types': 'off',
  },
}
