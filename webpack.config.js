const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  //babel-polyfill allows use of features such as generators and async and
  //await
  context: __dirname + '/client/src', //root of project
  entry: ['babel-polyfill', './index.tsx'],
  output: {
    path: __dirname + '/client/build',
    filename: 'bundle.js'
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devtool: 'cheap-module-source-map',

  devServer: {
    contentBase: __dirname + '/client/src'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.join(__dirname, 'client/src/components'),
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000 }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015', 'stage-0'] }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebPackPlugin({
      template: './index.html',
      inject: true,
      filename: 'index.html'
    }),
    new webpack.WatchIgnorePlugin([/css\.d\.ts$/])
  ]
};
