import { getExtractedSVG } from 'svg-inline-loader';
import type { Plugin } from 'rollup';
import fs from 'fs';

interface SvgLoaderOpt {
	classPrefix?: string;
	idPrefix?: string;
	removeSVGTagAttrs?: boolean;
	warnTags?: boolean;
	removeTags?: boolean;
	warnTagAttrs?: boolean;
	removingTagAttrs?: boolean;
}

//TODO: remove this once https://github.com/vitejs/vite/pull/2909 gets merged
export const svgLoader: (_opt?: SvgLoaderOpt) => Plugin = (_opts?: {}) => {
	return {
		name: 'vite-svg-patch-plugin',
		transform: function (code, id) {
			if (id.endsWith('.svg')) {
				const extractedSvg = fs.readFileSync(id, 'utf8');
				return `export default '${getExtractedSVG(extractedSvg, _opts)}'`;
			}
			return code;
		},
	};
};
