const path = require("path")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/app.js'],
  },
  output: { 
    path: path.resolve(__dirname, 'dist'),  
    filename: 'assets/js/[name].js', 
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },

      { test: /\.(html)$/,
        include: path.join(__dirname, 'src/'),
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
            
          }
        }
      }      
    ]
  }
}
