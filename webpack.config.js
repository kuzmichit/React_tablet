const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules|cdn_modules/
      },
      { // Добавляем загрузчики стилей
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
},


      {
        test: /\.(html)$/,
        use: ['html-loader'],
},
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
},

    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    modules: [
      'node_modules',
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules',
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
    ]
  },
  devServer: {
    port: 9950,
    hot: true,
    static: {
      directory: './dist'
    }
  }
};

module.exports = config;