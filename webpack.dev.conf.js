const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: './demo/index.js',
  output: {
    path: path.resolve(__dirname, 'demo'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      src: path.resolve(__dirname, './src'),
      dist: path.resolve(__dirname, './dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[local]_[hash:base64:5]'
                }
              }
            ]
          },
          {
            use: [
              'vue-style-loader',
              'css-loader'
            ]
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env',
              {
                targets: {
                  browsers: ['last 2 versions'],
                },
              },
            ],
            ['es2015', { modules: false }],
          ],
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};
