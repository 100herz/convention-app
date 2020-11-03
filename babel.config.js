module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.js',
            '.ios.js',
            '.android.js',
            '.ts',
            '.ios.ts',
            '.android.ts',
            '.tsx',
            '.ios.tsx',
            '.android.tsx',
            '.json',
            '.ios.json',
            '.android.json',
          ],
          alias: {
            '@__mocks__': ['./src/__mocks__'],
            '@assets': ['./src/assets'],
            '@constants': ['./src/constants'],
            '@components': ['./src/components'],
            '@models': ['./src/models'],
            '@navigations': ['./src/navigations'],
            '@screens': ['./src/screens'],
            '@stores': ['./src/stores'],
            '@styles': ['./src/styles'],
            '@utils': ['./src/utils'],
          },
        },
      ],
    ],
  }
}
