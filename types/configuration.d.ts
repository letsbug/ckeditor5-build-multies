import type { Element } from '@ckeditor/ckeditor5-engine';
import type { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';

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

export interface FigureAttrConfig {
	image: string | string[];
	table: string | string[];
	// TODO 'media' and 'rawHtml' not yet complete...
	// media: string | string[];
	// rawHtml: string | string[];
}

export interface MceConfig extends EditorConfig {
	figureAttributes?: FigureAttrConfig;
	fontColor?: FontColorConfig;
	mediaEmbed?: MediaEmbedConfig;
	simpleUpload?: SimpleUploadConfig;
	lineHeight?: LineHeightConfig;
	counter?: CounterConfig;
	extensions?: Array<ExtensionsConfig>;
}
