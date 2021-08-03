/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

'use strict';

/* eslint-env node */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { bundler, styles } = require('@ckeditor/ckeditor5-dev-utils');
const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	performance: { hints: false },

	entry: [/*require.resolve('regenerator-runtime/runtime.js'),*/ path.resolve(__dirname, 'src', 'ckeditor.js')],

	output: {
		// The name under which the editor will be exported.
		library: 'HlxRichPkg',

		path: path.resolve(__dirname, 'build'),
		filename: 'ckeditor.js',
		libraryTarget: 'umd',
		libraryExport: 'default'
	},

	optimization: {
		minimizer: [
			new TerserPlugin({
				sourceMap: true,
				terserOptions: {
					output: {
						// Preserve CKEditor 5 license comments.
						comments: /^!/
					}
				},
				extractComments: false
			})
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: 'content-style.css'
		}),
		new CKEditorWebpackPlugin({
			// UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
			// When changing the built-in language, remember to also change it in the editor's configuration (src/ckeditor.js).
			language: 'zh-cn',
			additionalLanguages: 'all'
		}),
		new webpack.BannerPlugin({
			banner: bundler.getLicenseBanner(),
			raw: true
		})
	],

	module: {
		rules: [
			// {
			// test: /ckeditor5-[^\/\\]+[\/\\].+\.js$/,
			// use: [
			//   {
			// 	loader: 'babel-loader',
			// 	options: {
			// 	  presets: [require('@babel/preset-env')]
			// 	}
			//   }
			// ]
			// },
			{
				test: /\.svg$/,
				use: ['raw-loader']
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: styles.getPostCssConfig({
							themeImporter: {
								themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
							},
							minify: true
						})
					}
				]
			}
		]
	}
};
