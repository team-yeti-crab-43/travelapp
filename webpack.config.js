const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          },
        },
        {
          test: /.(css|scss)$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        }
      ],
    },

  devServer: {
      host: 'localhost',
      port: 8080,
      publicPath: '/',
      hot: true,
      inline: true,
      contentBase: path.resolve(__dirname, 'dist'),
      proxy: {"/api": "http://localhost:3000"}
    },
  plugins: [new HtmlWebPackPlugin({ template: path.resolve(__dirname, 'client', 'index.html') })]
  };