import { Plugin } from '@ckeditor/ckeditor5-core';
import { OutlineCommand } from './command';

const OUTLINE = 'outline';

export class OutlineEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'OutlineEditing';
	}

	/**
	 * @inheritDoc
	 * @return {Promise<void> | void}
	 */
	init() {
		const editor = this.editor;
		const conversion = editor.conversion;
		editor.model.schema.extend('$text', { allowAttributes: OUTLINE });
		editor.model.schema.setAttributeProperties(OUTLINE, {
			isFormatting: true,
			copyOnEnter: true,
		});

		conversion.for('upcast').elementToAttribute({
			view: {
				name: 'span',
				styles: {
					border: /[\s\S]+/,
				},
			},
			model: {
				key: OUTLINE,
				value: this._renderUpcastAttribute('border'),
			},
		});

		conversion.for('downcast').attributeToElement({
			model: OUTLINE,
			view: (val, { writer }) => {
				return writer.createAttributeElement('span', { style: 'border: solid 1px #000000;' });
			},
		});

		editor.commands.add(OUTLINE, new OutlineCommand(editor));

		editor.keystrokes.set('CTRL+SHIFT+O', OUTLINE);
	}

	/**
	 * outline border style css helper, responsible for upcasting data to the model.
	 *
	 * @param {String} styleAttr
	 * @return {function(*): String}
	 * @private
	 */
	_renderUpcastAttribute(styleAttr) {
		return (viewEl) => this._normalizeBorderCode(viewEl.getStyle(styleAttr));
	}

	/**
	 * Fixes the border value string
	 *
	 * @param {String} value
	 * @return {String}
	 * @private
	 */
	_normalizeBorderCode(value) {
		return value.replace(/\s/g, '');
	}
}
