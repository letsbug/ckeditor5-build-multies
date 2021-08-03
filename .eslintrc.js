/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* eslint-env node */

'use strict';

module.exports = {
	env: {
		browser: true,
		node: true
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	plugins: [
		'@typescript-eslint',
		'prettier'
	],
	rules: {
		'prettier/prettier': ['error'],
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'off'
	}
};
