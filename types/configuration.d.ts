import type { Element } from '@ckeditor/ckeditor5-engine';
import type { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';
import type { ImageConfig as CkImageConfig } from '@ckeditor/ckeditor5-image/src/image';

export interface SimpleUploadConfig {
	headers?: Record<string, string>;
	uploadUrl?: string;
	withCredentials?: boolean;
	key?: string;
}

export interface CounterStats {
	characters: number;
	doubles: number;
}

export interface CounterConfig {
	container?: HTMLElement;
	characters?: boolean;
	doubles?: boolean;
	onUpdate?: (stats: CounterStats) => void;
}

export interface FontColorConfig {
	colors?: Array<string | any>;
	columns?: number;
	documentColors?: number;
}

export interface ExtensionsConfig {
	name: string;
	label: string;
	icon: string | SVGElement;
	command?: (selected?: Element) => any;
	// target?: 'base' | 'image' | 'media' | 'table';
}

export interface MediaEmbedProvider {
	name: string;
	url: RegExp | Array<RegExp>;
	html(match: RegExpMatchArray): string;
}

export interface MediaEmbedConfig {
	providers?: MediaEmbedProvider[];
	extraProviders?: MediaEmbedProvider[];
	removeProviders?: string[];
	previewsInData?: boolean;
	toolbar?: string[];
}

export interface LineHeightConfig {
	options?: number[];
	unit?: 'px';
}

export interface AttributeWhitelistConfig {
	name: string;
	model: 'image' | 'imageBlock' | 'imageInline' | 'table';
	// TODO Just only supported 'image' & 'table' ...
	// | 'mediaEmbed'
	// | 'rawHtml'
	// | 'paragraph'
	// | 'codeBlock';
}

export interface ImageConfig extends CkImageConfig {
	defaultCaption?: string | ((image: Element) => string);
}

export interface MceConfig extends EditorConfig {
	attributeWhitelist?: AttributeWhitelistConfig[];
	fontColor?: FontColorConfig;
	mediaEmbed?: MediaEmbedConfig;
	simpleUpload?: SimpleUploadConfig;
	lineHeight?: LineHeightConfig;
	counter?: CounterConfig;
	image?: ImageConfig;
	extensions?: Array<ExtensionsConfig>;
}
