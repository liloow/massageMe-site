const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const nodeExternals = require('webpack-node-externals');
const merge = require('lodash.merge');

const TARGET_NODE = process.env.WEBPACK_TARGET === 'node';

const createApiFile = TARGET_NODE ? './src/create-api-server.js' : './src/api.js';

const target = TARGET_NODE ? 'server' : 'client';

module.exports = {
  configureWebpack: () => ({
    entry: `./src/entry-${target}.js`,
    target: TARGET_NODE ? 'node' : 'web',
    externals: TARGET_NODE
      ? nodeExternals({
          whitelist: /\.css$/,
        })
      : undefined,
    output: TARGET_NODE
      ? {
          libraryTarget: 'commonjs2',
        }
      : {},
    optimization: {
      minimize: true,
      splitChunks: undefined,
    },
    resolve: {
      alias: {
        'create-api': createApiFile,
      },
    },
    plugins: TARGET_NODE ? [new VueSSRServerPlugin()] : [new VueSSRClientPlugin()],
    devtool: 'source-map',
  }),
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options =>
        merge(options, {
          optimizeSSR: TARGET_NODE ? false : true,
        })
      );
  },
  css: {
    loaderOptions: {
      css: {minimize: true},
    },
  },
};

// module.exports = {
//   configureWebpack: () => ({
//     entry: `./src/entry-${target}`,
//     target: TARGET_NODE ? 'node' : 'web',
//     externals: TARGET_NODE
//       ? nodeExternals({
//           whitelist: /\.css$/,
//         })
//       : undefined,
//     output: TARGET_NODE
//       ? {
//           libraryTarget: 'commonjs2',
//         }
//       : {},
//     optimization: {
//       splitChunks: undefined,
//     },
//     devtool: 'source-map',
//     resolve: {
//       // alias: {
//       //   'create-api': createApiFile,
//       // },
//     },
//     plugins: TARGET_NODE ? [new VueSSRServerPlugin()] : [new VueSSRClientPlugin()],
//   }),
//   chainWebpack: config => {
//     config.module
//       .rule('vue')
//       .use('vue-loader')
//       .tap(options =>
//         merge(options, {
//           optimizeSSR: false,
//         })
//       );
//   },
// };
