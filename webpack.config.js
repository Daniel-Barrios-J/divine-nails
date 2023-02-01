const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const rulesForJS = {
  test: /\.(js|jsx)?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        }
      ]
    ]
  }
}
const rulesForStyles = {
  test: /\.(scss|css)?$/,
  use: ['style-loader', 'css-loader', 'sass-loader']
}
const rules = [ rulesForJS, rulesForStyles ]

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === 'production'
  return {
    // entry: './src/index.js'
    output: {
      filename: isProduction ? '[name].[contenthash].js' :'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.js','.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({template: 'src/index.html'})
    ],
    module: {
      rules
    },
    devServer: {
      open: true,
      port: 3000,
      historyApiFallback: true,
    },
    devtool: 'source-map' 
  }
}