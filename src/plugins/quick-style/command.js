/**
 * @module quick-style/command
 */
import { Command } from '@ckeditor/ckeditor5-core';

export class QuickStyleCommand extends Command {
	// /**
	//  * @inheritDoc
	//  */
	// refresh() {
	// 	this.isEnabled = true;
	// }

	/**
	 * @inheritDoc
	 * @param {object} [options]
	 * @param {boolean} [options.removeFormat] Whether or not to format text
	 * @param {boolean} [options.indentFirst] Whether to indent the first line
	 * @param {boolean} [options.convertFullHalf] Whether to execute the half to full command
	 * @param {boolean} [options.clearEmpty] Whether to execute the clear space command
	 * @param {boolean} [options.clearSpace] Whether to execute the clear empty line command
	 * @param {boolean} [options.softBreakToEnter] Whether to execute the soft break to enter command
	 */
	execute(options = {}) {
		const editor = this.editor;

		const params = { convertFullHalf: { type: 'half' } };
		const sorted = [
			'removeFormat',
			'clearLinks',
			'convertFullHalf',
			'softBreakToEnter',
			'clearEmpty',
			'clearSpace',
			'indentFirst',
		];
		const needReset = new Set([
			'removeFormat',
			'clearLinks',
			'convertFullHalf',
			'clearSpace',
			'indentFirst',
		]);

		for (const option of sorted.filter((op) => Object.keys(options).includes(op))) {
			if (!options[option]) {
				continue;
			}

			if (needReset.has(option)) {
				editor.execute('selectAll');
			}
			if (option === 'clearLinks') {
				this.clearLinks();
				continue;
			}
			editor.execute(option, params[option] || null);
		}
	}

	clearLinks() {
		const model = this.editor.model;
		const range = model.createRangeIn(model.document.getRoot());

		model.change((writer) => {
			for (const walker of range.getWalker()) {
				const textNode = walker.item.textNode;
				if (textNode) writer.removeAttribute('linkHref', textNode);
			}
		});
	}
}
