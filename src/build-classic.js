/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// global configs
import { builtins, fontSize, toolbarer, image, language, table, fontFamily } from './configs';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [...builtins, SourceEditing];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: toolbarer(
			`sourceEditing, |, findReplace, |,
			undo, redo, |,
			formatPainter, |,
			heading, |,
			fontFamily, fontSize, fontColor, fontBackgroundColor, |,
			bold, italic, underline, strikethrough, bulletedList, numberedList, |,
			lineHeight, paragraphSpacing, indentFirst, alignment, |,
			link, uploadImage, blockQuote, insertTable, mediaEmbed, |,
			removeFormat, convertFullHalf, clearSpace, softBreakToEnter, clearEmpty`
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
