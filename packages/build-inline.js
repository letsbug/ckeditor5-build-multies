/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// global configs
import { builtins, fontFamily, fontSize, toolbarer, image, language, table, htmlEmbed } from './configs';

// The editor creator to use.
import { InlineEditor as InlineEditorBase } from '@ckeditor/ckeditor5-editor-inline';

export default class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
InlineEditor.builtinPlugins = builtins;

// Editor configuration.
InlineEditor.defaultConfig = {
	balloonToolbar: [
		'formatPainter',
		'|',
		'heading',
		'|',
		'bold',
		'italic',
		'underline',
		'bulletedList',
		'numberedList',
		'link',
	],
	toolbar: {
		items: [
			'indentFirst',
			'alignment',
			'|',
			'uploadImage',
			'mediaEmbed',
			'insertTable',
			'htmlEmbed',
			'blockQuote',
			'|',
			'clearEmpty',
			'clearSpace',
			'softBreakToEnter',
		],
		shouldNotGroupWhenFull: true,
	},
	fontSize,
	fontFamily,
	image,
	table,
	htmlEmbed,

	// This value must be kept in sync with the language defined in webpack.config.js.
	language,
};
