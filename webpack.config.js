var webpack = require('webpack');

module.exports = {
  entry: {
    app:['webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'],
    vendors: ['react','react-dom','react-router','history/lib/createBrowserHistory']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      include:/src/,
      loader: 'react-hot!babel?presets[]=react,presets[]=es2015'
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
  	new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};