module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // 'prettier',
    // 'prettier/vue',
    '@nuxtjs',
    // 'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/essential'
    // 'eslint:recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {}
}
