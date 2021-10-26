import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { svgLoader } from './scripts/svgLoader';
import { styles } from '@ckeditor/ckeditor5-dev-utils';

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
	plugins: [vue(), svgLoader()],
	css: {
		postcss: styles.getPostCssConfig({
			themeImporter: {
				themePath: require.resolve('@ckeditor/ckeditor5-theme-lark'),
			},
		}),
	},
});
