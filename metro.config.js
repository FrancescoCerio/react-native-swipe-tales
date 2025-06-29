// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config')
const defaultConfig = getDefaultConfig(__dirname)

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {}

module.exports = wrapWithReanimatedMetroConfig(mergeConfig(defaultConfig, config))
