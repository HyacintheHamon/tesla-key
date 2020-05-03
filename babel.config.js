module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['.'],
      extensions: [
        '.ios.ts',
        '.android.ts',
        '.ts',
        '.ios.tsx',
        '.android.tsx',
        '.tsx',
        '.jsx',
        '.js',
        '.json',
      ],
      alias: {
        '@navigation': './src/navigation',
        '@components': './src/components',
        '@constants': './src/constants',
        '@contexts': './src/contexts',
        '@services': './src/services',
        '@screens': './src/screens',
        '@graphql': './src/graphql',
        '@utils': './src/utils',
        '@types': './src/types',
        '@assets': './assets',
        '@env': './src/env',
      },
    }],
  ]
};
