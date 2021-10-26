/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* eslint-env node */

'use strict';

/**
 *
 * @type {import('eslint/lib/shared/types').ConfigData}
 */
module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		parser: 'babel-eslint',
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'@vue/prettier',
		'prettier',
		'@vue/prettier/@typescript-eslint',
	],
	plugins: [
		'import',
		'html',
		'@typescript-eslint',
		'prettier'
	],
	rules: {
		'no-console': [2, { allow: ['warn', 'error'] }],
		'no-debugger': 'error',

		'prettier/prettier': ['error'],
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
	},
	overrides: [
		{
			files: ['*.vue'],
			parser: 'vue-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	]
};
