import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import svgLoader from 'vite-svg-loader';
// import rawLoader from 'vite-raw-plugin';
import { svgLoader } from './scripts/svgLoader';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		force: true,
		port: 18011,
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.esm-bundler.js',
			'@hlx/ckeditor5-build-multies': path.join(__dirname, '../src/ckeditor.js'),
			'@hlx/ckeditor5-build-multies/es': path.join(__dirname, '../src'),
		},
	},
	plugins: [
		vue(),
		svgLoader(),
		// svgLoader({
		// 	svgo: false,
		// }),
		// rawLoader({
		// 	fileRegex: /\.svg$/,
		// }),
	],
});
