/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* eslint-env node */

'use strict';

const { defineConfig } = require('eslint-define-config');
/**
 *
 * @type {import('eslint/lib/shared/types').ConfigData}
 */
module.exports = defineConfig({
	root: true,

	env: {
		browser: true,
		node: true,
		es6: true,
	},

	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021,
	},

	extends: ['eslint:recommended', 'plugin:import/recommended', 'prettier'],

	rules: {
		'no-console': [2, { allow: ['warn', 'error'] }],
		'no-debugger': 'error',
		'no-useless-constructor': 'off',

		// 'import/no-unresolved': ['error', { allowModules:  }],

		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'off',

		'prettier/prettier': ['error'],
	},

	overrides: [
		{
			files: ['*.vue', '*.tsx'],
			parser: 'vue-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
			extends: ['plugin:vue/vue3-essential', '@vue/eslint-config-prettier', '@vue/eslint-config-typescript'],
		},
		{
			files: ['*.ts'],
			rules: {
				'no-unused-vars': 'off',
				'import/named': 'off',
				'@typescript-eslint/no-unused-vars': ['error'],
			},
		},
	],

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts', '.jsx', '.tsx', '.cjs', '.mjs', '.md'],
			},
			alias: {
				map: [['@hlx/mce', './packages']],
				extensions: ['.d.ts', '.js', '.jsx', '.ts', '.tsx', '.vue'],
			}
		},
	},
});
