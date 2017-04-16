import path from 'path';
import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtool:'source-map',
  entry: {
    main: path.resolve(__dirname, 'src/index'),
    vendor: path.resolve(__dirname, 'src/vendor')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    noInfo: false
  },
  plugins: [
    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),

    // Hash the files using MD5 so that their names change when the content changes
    new WebpackMd5Hash(),

    // Use CommonsChunkPlugin to create a separate bundle of
    // vendor libraries so that they're cached separately.
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    }),

    new HtmlWebPackPlugin({
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin({
     sourceMap: true
   })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?sourceMap')}
    ]
  }
}
