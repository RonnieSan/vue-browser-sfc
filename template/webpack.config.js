// ----------------------------------------------------------------------
// WEBPACK CONFIGURATION
// ----------------------------------------------------------------------

// INSTRUCTIONS
// webpack --env.file="./path/to/file" --relative to the src folder

// Import dependencies
const path                = require('path');
const webpack             = require('webpack');
const ExtractTextPlugin   = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin   = require('optimize-css-assets-webpack-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const VueLoaderPlugin     = require('vue-loader/lib/plugin');

function resolve(dir) {
	return path.resolve(__dirname, dir);
}

module.exports = (env) => {
	// Get the basename from the filepath
	const filename = path.basename(env.file, '.vue');
	const filepath = path.dirname(env.file);

	return {
		watch : true,
		mode : 'production',
		entry : {
			[filename] : './entry.js'
		},
		output : {
			filename : '[name].js',
			path : path.resolve(__dirname, 'dist', filepath)
		},
		resolve : {
			extensions : ['.vue', '.js'],
			alias : {
				'vue$' : resolve('node_modules/vue/dist/vue.min.js'),
				'@'    : resolve('src')
			}
		},
		externals : {
			vue : 'Vue',
			lodash : 'lodash'
		},
		module : {
			rules : [
				{
					test : /entry\.js$/,
					loader : StringReplacePlugin.replace({
						replacements: [
							{
								pattern: /__FILE__/ig,
								replacement: function (match, p1, offset, string) {
									return env.file;
								}
							}
						]})
				},
				{
					test : /\.vue$/,
					loader : 'vue-loader'
				},
				{
					test : /\.js$/,
					loader : 'babel-loader',
					include : [
						resolve('src')
					],
					exclude: file => (
						/node_modules/.test(file) &&
						!/\.vue\.js/.test(file)
					)
				},
				{
					test : /\.css$/,
					use : [
						'vue-style-loader',
						'css-loader'
					]
				},
				{
					test : /\.less$/,
					use : [
						'vue-style-loader',
						'css-loader',
						'less-loader'
					]
				},
				{
					test : /\.scss$/,
					use : [
						'vue-style-loader',
						'css-loader',
						'sass-loader'
					]
				},
				{
					test : /\.sass$/,
					use : [
						'vue-style-loader',
						'css-loader',
						{
							loader : 'sass-loader',
							options : {
								indentedSyntax : true
							}
						}
					]
				}
			]
		},
		plugins : [
			new VueLoaderPlugin(),
			new OptimizeCSSPlugin({
				cssProcessorOptions: {
					safe: true
				}
			})
		]
	};
};