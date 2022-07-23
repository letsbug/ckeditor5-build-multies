/**
 * @module paragraph-spacing/index
 */
import { Plugin } from '@ckeditor/ckeditor5-core';

import { ParagraphSpacingEditing } from './editing';
import { ParagraphSpacingUI } from './ui';

const ATTRIBUTE = 'paragraphSpacing';

class ParagraphSpacing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ParagraphSpacingEditing, ParagraphSpacingUI];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'ParagraphSpacing';
	}
}

export { ATTRIBUTE, ParagraphSpacing };
export { ParagraphSpacingUI } from './ui';
export { ParagraphSpacingEditing } from './editing';
