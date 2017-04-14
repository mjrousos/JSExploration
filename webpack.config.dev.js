import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';

export default {
  devtool:'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    noInfo: false
  },
  plugins: [
    // Eliminate duplicate packages when bundling
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: 'babel-loader'},
      {test: /\.css$/, use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }
        ]
      }
    ]
  }
}
