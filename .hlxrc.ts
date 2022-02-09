import { defineConfig, IpUrl } from '@hlx/cli';

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
	deploy: {
		service: process.env.HLX_DOCKER_SERVICE as IpUrl,
		registry: process.env.HLX_DOCKER_REGISTRY as IpUrl,
		user: process.env.HLX_DOCKER_USER,
		password: process.env.HLX_DOCKER_PWD,
		email: process.env.HLX_DOCKER_EMAIL,
	},
});
