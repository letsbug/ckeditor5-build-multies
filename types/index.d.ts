import { Editor, EditorUI, Plugin, ContextPlugin } from '@ckeditor/ckeditor5-core';
import { Element } from '@ckeditor/ckeditor5-engine';
import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';
import { DataApi } from '@ckeditor/ckeditor5-core/src/editor/utils/dataapimixin';
import { EditorWithUI } from '@ckeditor/ckeditor5-core/src/editor/editorwithui';
import { ElementApi } from '@ckeditor/ckeditor5-core/src/editor/utils/elementapimixin';
import { Emitter } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';

export interface SimpleUploadConfig {
	headers?: Record<string, string>;
	uploadUrl?: string;
	withCredentials?: boolean;
	key?: string;
}

export interface CounterConfig {
	container?: HTMLElement;
	characters?: boolean;
	doubles?: boolean;
	onUpdate?: Function;
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

// export interface ParagraphSpacingConfig {
// 	options?: number[];
// 	unit?: 'px' | '%';
// }
//
// export interface FindReplaceConfig {
// 	type?: 'find' | 'replace' | 'replaceAll' | 'reset';
// 	position?: 'prev' | 'next' | 'none';
// 	key?: string[];
// 	replace?: string;
// }

export interface HlxMceConfig extends EditorConfig {
	fontColor?: FontColorConfig;
	mediaEmbed?: MediaEmbedConfig;
	simpleUpload?: SimpleUploadConfig;
	lineHeight?: LineHeightConfig;
	counter?: CounterConfig;
	extensions?: Array<ExtensionsConfig>;
}

/**
 * HlxMce
 */
export class HlxMce extends Editor implements Observable, DataApi, EditorWithUI, ElementApi, Emitter {
	static builtinPlugins: Array<typeof Plugin | typeof ContextPlugin | string>;
	static defaultConfig?: HlxMceConfig;
	static create(sourceElementOrData: HTMLElement | string, config?: HlxMceConfig): Promise<HlxMce>;

	readonly ui: EditorUI;
	readonly sourceElement: HTMLElement;

	constructor(sourceElementOrData: HTMLElement | string, config?: HlxMceConfig);

	getData(options?: { rootName?: string; trim?: 'empty' | 'none' }): string;
	setData(data: string): void;
	updateSourceElement(): void;
}

declare const HlxMceBuilds: {
	BuildDecoupled: typeof HlxMce;
	BuildInline: typeof HlxMce;
	BuildClassic: typeof HlxMce;
};

export default HlxMceBuilds;
