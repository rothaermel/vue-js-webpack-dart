const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');
const Autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssNano = require('cssnano');

module.exports = merge(common, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: ExtractTextPlugin.extract({
					fallback: [ 'vue-style-loader', 'style-loader' ],
					use: [
						{
							loader: 'css-loader'
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: [ Autoprefixer('last 4 version'), CssNano({ preset: 'default' }) ],
								minimize: true,
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader'
						}
					]
				})
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'assets/fonts/'
						}
					}
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('assets/css/app.css'),
		new CopyWebpackPlugin([
			{ from: 'src/assets/images', to: 'assets/images' },
			{ from: 'src/index.html', to: 'index.html' }
		])
	]
});
