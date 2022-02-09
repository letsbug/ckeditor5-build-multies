/**
 * The @commitlint/config-conventional overrides
 *
 * @see https://commitlint.js.org/#/reference-configuration
 */
module.exports = {
	rules: {
		'type-enum': [
			2,
			'always',
			['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'release'],
		],
	},
};
