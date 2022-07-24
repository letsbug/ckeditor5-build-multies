'use strict';

const { defineConfig } = require('eslint-define-config');
/**
 *
 * @type {import('eslint/lib/shared/types').ConfigData}
 */
module.exports = defineConfig({
	extends: ['@hlx/eslint-config/vue-latest'],

	rules: {
		'no-console': [2, { allow: ['warn', 'error'] }],
		'no-debugger': 'error',
		'no-useless-constructor': 'off',
		'no-unused-vars': 'off',

		'import/named': 'off',
		// 'import/no-unresolved': ['error', { allowModules:  }],

		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
});
