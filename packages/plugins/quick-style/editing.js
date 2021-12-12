/**
 * @module quick-style/editing
 */
import { Plugin } from '@ckeditor/ckeditor5-core';
import { QuickStyleCommand } from './command';
import { ATTRIBUTE } from './index';

export class QuickStyleEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'QuickStyleEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		editor.commands.add(ATTRIBUTE, new QuickStyleCommand(editor));
	}
}
