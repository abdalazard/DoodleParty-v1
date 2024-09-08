module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // 'nativewind/babel',
      'react-native-reanimated/plugin', // Se você estiver usando o react-native-reanimated
      'babel-plugin-macros'
    ],
  };
};