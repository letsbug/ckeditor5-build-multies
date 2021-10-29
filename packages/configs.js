import { Essentials } from '@ckeditor/ckeditor5-essentials/src';
import { Alignment } from '@ckeditor/ckeditor5-alignment/src';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat/src';
import { Bold, Italic, Strikethrough, Underline, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles/src';
import { Font } from '@ckeditor/ckeditor5-font/src';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote/src';
import { Heading } from '@ckeditor/ckeditor5-heading/src';
import ImageBlock from '@ckeditor/ckeditor5-image/src/imageblock';
import { ImageCaption, ImageStyle, ImageToolbar, ImageResize, ImageUpload } from '@ckeditor/ckeditor5-image/src';
import { Link, LinkImage } from '@ckeditor/ckeditor5-link/src';
import { List, ListStyle } from '@ckeditor/ckeditor5-list/src';
import { MediaEmbed, MediaEmbedToolbar } from '@ckeditor/ckeditor5-media-embed/src';
import { HtmlEmbed } from '@ckeditor/ckeditor5-html-embed/src';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph/src';
import { PageBreak } from '@ckeditor/ckeditor5-page-break/src';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office/src';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table/src';
import { TextTransformation } from '@ckeditor/ckeditor5-typing/src';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format/src';
import { Indent } from '@ckeditor/ckeditor5-indent/src';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';

// custom plugins with @hlw/ckeditor5-plugins
import { IndentFirst } from '../plugins/src/indent-first';
import { ParagraphSpacing } from '../plugins/src/paragraph-style/spacing';
import { LineHeight } from '../plugins/src/paragraph-style/line-height';
import { FormatPainter } from '../plugins/src/format-painter';
import { ClearEmpty } from '../plugins/src/clear-empty';
import { ClearSpace } from '../plugins/src/clear-space';
import { SoftBreakToEnter } from '../plugins/src/soft-break-to-enter';
import { QuickStyle } from '../plugins/src/quick-style';
import { ConvertFullHalf } from '../plugins/src/convert-full-half';
import { SimpleAdapter } from '../plugins/src/simple-adapter';
import { Counter } from '../plugins/src/counter';
import { FigureAttributes } from '../plugins/src/figure-attributes';

export const builtins = [
	Essentials,
	Alignment,
	Autoformat,
	Bold,
	Font,
	Italic,
	Strikethrough,
	Underline,
	BlockQuote,
	Heading,
	Indent,
	ImageBlock,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	Link,
	LinkImage,
	List,
	ListStyle,
	MediaEmbed,
	MediaEmbedToolbar,
	HtmlEmbed,
	Paragraph,
	PageBreak,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	Subscript,
	Superscript,
	SimpleAdapter,
	RemoveFormat,
	Highlight,
	FindAndReplace,

	// custom plugins with @hlw/ckeditor5-plugins
	FigureAttributes,
	IndentFirst,
	ParagraphSpacing,
	LineHeight,
	FormatPainter,
	ClearEmpty,
	ClearSpace,
	SoftBreakToEnter,
	QuickStyle,
	ConvertFullHalf,
	Counter,
];

export const fontSize = {
	options: [12, 'default', 16, 18, 20, 24, 28, 32, 36, 42],
	supportAllValues: true,
};

export const fontFamily = {
	options: [
		'default',
		'宋体, SimSun, sans-serif',
		'微软雅黑, Microsoft Yahei, monospace',
		'黑体, SimHei, serif',
		'楷体, KaiTi, sans-serif',
		'隶书, LiSu, sans-serif',
		'Arial, Helvetica, sans-serif',
		'Courier New, Courier, monospace',
		'Georgia, serif',
		'Lucida Sans Unicode, Lucida Grande, sans-serif',
		'Tahoma, Geneva, sans-serif',
		'Times New Roman, Times, serif',
		'Trebuchet MS, Helvetica, sans-serif',
		'Verdana, Geneva, sans-serif',
	],
};

export const image = {
	styles: ['alignLeft', 'alignCenter', 'alignRight', 'full', 'side'],
	resizeOptions: [
		{
			name: 'resizeImage:original',
			value: null,
			icon: 'original',
		},
		{
			name: 'resizeImage:50',
			value: '50',
			icon: 'medium',
		},
		{
			name: 'resizeImage:75',
			value: '75',
			icon: 'large',
		},
	],
	toolbar: [
		'imageStyle:block',
		'imageStyle:side',
		'|',
		'resizeImage:50',
		'resizeImage:75',
		'resizeImage:original',
		'|',
		'imageTextAlternative',
		'linkImage',
		'toggleImageCaption',
		'|',
	],
	upload: {
		panel: {
			items: ['insertImageViaUrl'],
		},
	},
};

export const table = {
	contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
};

export const htmlEmbed = {
	showPreviews: true,
};

export const language = 'zh-cn';

export function toolbarer(preset) {
	return preset
		.replace(/[\s]+/g, '')
		.split(',')
		.filter((bar) => !!bar);
}
