/**
 * @module outline/index
 */
import { Plugin } from '@ckeditor/ckeditor5-core';
import { OutlineUI } from './ui';
import { OutlineEditing } from './editing';

class Outline extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [OutlineUI, OutlineEditing];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Outline';
	}
}

export { Outline };
