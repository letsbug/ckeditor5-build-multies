/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// global configs
import { builtins, fontFamily, fontSize, toolbarer, image, language, table } from './configs';

// The editor creator to use.
import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';

export default class DecoupledEditor extends DecoupledEditorBase {}

// Plugins to include in the build.
DecoupledEditor.builtinPlugins = builtins;

// Editor configuration.
DecoupledEditor.defaultConfig = {
	toolbar: {
		items: toolbarer(
			`findReplace, |,
			undo, redo, |,
			formatPainter, |,
			heading, |,
			fontfamily, fontsize, fontColor, fontBackgroundColor, |,
			bold, italic, underline, strikethrough, numberedList, bulletedList, |,
			indentFirst, paragraphSpacing, lineHeight, alignment, |,
			link, blockquote, imageUpload, insertTable, mediaEmbed, pageBreak, |,
			removeFormat, convertFullHalf, clearSpace, softBreakToEnter, clearEmpty, |,
			quickStyle`
		),
		shouldNotGroupWhenFull: true,
	},
	fontSize,
	fontFamily,
	image,
	table,
	// This value must be kept in sync with the language defined in webpack.config.js.
	language,
};
