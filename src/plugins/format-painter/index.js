import { Plugin } from '@ckeditor/ckeditor5-core';
import { FormatPainterUI } from './ui';
import { FormatPainterEditing } from './editing';

const ATTRIBUTE = 'formatPainter';

class FormatPainter extends Plugin {
	/**
	 * @inheritDoc
	 * @returns {string}
	 */
	static get pluginName() {
		return 'FormatPainter';
	}

	/**
	 * @inheritDoc
	 * @returns {(FormatPainterUI|FormatPainterEditing)[]}
	 */
	static get requires() {
		return [FormatPainterUI, FormatPainterEditing];
	}
}

export { ATTRIBUTE, FormatPainter };
export { FormatPainterUI } from './ui';
export { FormatPainterEditing } from './editing';
