import BuildClassic from './build-classic';
import BuildInline from './build-inline';
import BuildBalloon from './build-balloon';

import './theme/theme.css';

const HlxMce = {
	classic: BuildClassic,
	inline: BuildInline,
	balloon: BuildBalloon,
};

export default HlxMce;
