module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@__mocks__': ['./__mocks__'],
            '@assets': ['./assets'],
            '@components': ['./components'],
            '@models': ['./models'],
            '@navigations': ['./navigations'],
            '@screens': ['./screens'],
            '@stores': ['./stores'],
            '@styles': ['./styles'],
            '@utils': ['./utils'],
          },
        },
      ],
    ],
  }
}
