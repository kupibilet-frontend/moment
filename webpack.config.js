const webpack = require('webpack')
const path = require('path')

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),

  new webpack.ContextReplacementPlugin(
    /node_modules\/moment\/locale/,
    /(ru|en-gb)/
  ),
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  )
}

const resolve = {
  extensions: [
    '.js',
    '.jsx',
  ]
}

const output = {
  path: path.resolve(__dirname, 'lib'),
  filename: '[name].js',
  library: 'moment',
  libraryTarget: 'commonjs2',
}


module.exports = {
  name: 'moment',
  target: 'web',
  output,

  entry: {
    moment: path.resolve(__dirname, 'src'),
  },

  resolve,
  plugins,
}
