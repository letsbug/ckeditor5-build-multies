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

	extends: ['@hlx/eslint-config-vue'],

	rules: {
		'no-console': [2, { allow: ['warn', 'error'] }],
		'no-debugger': 'error',
		'no-useless-constructor': 'off',
		'no-unused-vars': 'off',

		'import/named': 'off',
		// 'import/no-unresolved': ['error', { allowModules:  }],

		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
	},
});
