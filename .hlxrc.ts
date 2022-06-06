import { defineConfig } from '@hlx/cli';

export default defineConfig({
	namespace: 'hualongxin',
	// upgrade: {
	//   increment: 'prerelease'
	// },
	release: {
		token: process.env.HLX_GITLAB_TOKEN,
		useHttp: true,
	},
	publish: {
		user: process.env.HLX_NEXUS_USER,
		token: process.env.HLX_NEXUS_TOKEN,
	},
});
