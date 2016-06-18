var debug = process.env.NODE_ENV != "production";
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.___dirname,
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: path.join(__dirname, 'src')
      }, 
      //TBD > Need to add the regex loader for images and font 
      //http://stackoverflow.com/questions/31180570/webpack-can-not-load-font-file-unexpected-token
      {       
          test: /\.css$/,
          exclude: /.*\.min.css/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }, 
      {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      }, {
          test: /\.png$/,
          loader: 'url-loader?prefix=img/&limit=5000'
      }, {
          test: /\.jpg$/,
          loader: 'url-loader?prefix=img/&limit=5000'
      }, {
          test: /\.gif$/,
          loader: 'url-loader?prefix=img/&limit=5000'
      }, {
          test: /\.woff$/,
          loader: 'url-loader?prefix=font/&limit=5000'
      },{
          test: /\.woff2$/,
          loader: 'url-loader?prefix=font/&limit=5000'
      }, {
          test: /\.eot$/,
          loader: 'file-loader?prefix=font/'
      }, {
          test: /\.ttf$/,
          loader: 'file-loader?prefix=font/'
      }, {
          test: /\.svg$/,
          loader: 'file-loader?prefix=font/'
      }, { 
          test: /\.json$/, 
          loader: 'json' 
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("bundle.css")
  ]
};
