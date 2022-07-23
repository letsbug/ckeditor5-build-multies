import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { svgLoader } from './scripts/svg-loader';
import { styles } from '@ckeditor/ckeditor5-dev-utils';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 18_011,
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.esm-bundler.js',
			'@hlx/mce': path.join(__dirname, '../src/index.js'),
			'@hlx/mce/*': path.join(__dirname, '../src'),
		},
	},
	plugins: [vueJsx({ mergeProps: true, enableObjectSlots: true }), vue(), svgLoader()],
	css: {
		postcss: styles.getPostCssConfig({
			themeImporter: {
				themePath: require.resolve('@ckeditor/ckeditor5-theme-lark'),
			},
		}),
	},
});
