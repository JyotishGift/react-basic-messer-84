const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: './bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react', 'env']
					}
				}
			},
			{
				test: /\.css/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					limit: 10000
				}
			}
		]
	},
	devtool: 'cheap-module-eval-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		open: true,
		port: 3000,
		inline: true,
		hot: true
	}

};