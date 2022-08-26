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
	 * @returns {Promise<void> | void}
	 */
	init() {
		const editor = this.editor;

		editor.conversion.for('upcast').elementToAttribute({
			view: {
				name: 'span',
				styles: {
					border: /[\S\s]+/,
				},
			},
			model: {
				key: OUTLINE,
				value: this._renderUpcastAttribute('border'),
			},
		});

		editor.conversion.for('downcast').attributeToElement({
			model: OUTLINE,
			view: (val, { writer }) => {
				return writer.createAttributeElement(
					'span',
					{ style: 'border: solid 1px #000000;' },
					{ priority: 7 }
				);
			},
		});

		editor.commands.add(OUTLINE, new OutlineCommand(editor));

		editor.model.schema.extend('$text', { allowAttributes: OUTLINE });
		editor.model.schema.setAttributeProperties(OUTLINE, {
			isFormatting: true,
			copyOnEnter: true,
		});

		editor.keystrokes.set('CTRL+SHIFT+O', OUTLINE);
	}

	/**
	 * outline border style css helper, responsible for upcasting data to the model.
	 *
	 * @param {string} styleAttr
	 * @returns {function(*): string}
	 * @private
	 */
	_renderUpcastAttribute(styleAttr) {
		return (viewEl) => {
			return this._normalizeBorderCode(viewEl.getStyle(styleAttr));
		};
	}

	/**
	 * Fixes the border value string
	 *
	 * @param {string} value
	 * @returns {string}
	 * @private
	 */
	_normalizeBorderCode(value) {
		return value?.replace(/\s/g, '');
	}
}
