import BuildClassic from './build-classic';
import BuildInline from './build-inline';
import BuildDecoupled from './build-decoupled';

const HlxMceBuilds = {
	classic: BuildClassic,
	inline: BuildInline,
	decoupled: BuildDecoupled,
};

export default HlxMceBuilds;
