var path    = require('path');
var webpack = require('webpack');

module.exports = {
	entry:'./demo/index.js',
	output:{
		path:path.resolve(__dirname, 'demo'),
		filename:'bundle.js'
	},
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'src' : path.resolve(__dirname, './src'),
      'dist' : path.resolve(__dirname, './dist')
    }
  },
	module: {
    rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [[
            'env', {
              targets: {
                browsers: ['last 2 versions']
              }
            }
          ],['es2015', {'modules': false}]]
        }
    }
    ]
  }
};