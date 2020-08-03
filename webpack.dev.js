const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		port: 3000,
		open: true,
		hot: true,
		contentBase: './src',
		historyApiFallback: true
	},
	devtool: 'inline-source-map',
	plugins: [ new webpack.HotModuleReplacementPlugin() ],
	module: {
		rules: [
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(scss|css)$/,
				use: [
					'vue-style-loader',
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: { importLoaders: 1 }
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
});
