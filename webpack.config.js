var webpack = require('webpack');

module.exports = {
  entry: {
    app:['webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/index.jsx'],
    vendors: ['react','react-dom','react-router','history/lib/createBrowserHistory','material-ui']
  },
  module: {
    loaders: [{
	      test: /\.jsx?$/,
	      exclude: /node_modules/,
	      include:/app/,
	      loader: 'react-hot!babel?presets[]=react,presets[]=es2015'
	    },
	    { test: /\.css$/, loader: 'style-loader!css-loader' },
	    {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ],
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
    new webpack.NoErrorsPlugin()
  ]
};