const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5 * 1024,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new vueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: './src/index.html',
      title: 'VP'
    })
  ]
}