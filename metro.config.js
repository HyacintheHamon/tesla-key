/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  resolver: {
    assetExts: [
      'obj',
      'mtl',
      'JPG',
      'vrx',
      'hdr',
      'gltf',
      'fbx',
      'glb',
      'bin',
      'arobject',
      'png',
      'mp4',
      'gif',
    ],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};