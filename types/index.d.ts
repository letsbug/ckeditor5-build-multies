import type { ContextPlugin, Editor, EditorUI, Plugin } from '@ckeditor/ckeditor5-core';
import type { Element } from '@ckeditor/ckeditor5-engine';
import type { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';
import type { DataApi } from '@ckeditor/ckeditor5-core/src/editor/utils/dataapimixin';
import type { EditorWithUI } from '@ckeditor/ckeditor5-core/src/editor/editorwithui';
import type { ElementApi } from '@ckeditor/ckeditor5-core/src/editor/utils/elementapimixin';
import type { Emitter } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import type { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import type { ClassicMceUI, DecoupledMceUI, InlineMceUI } from './ui';

export type { InlineMceUI, ClassicMceUI, DecoupledMceUI } from './ui';

export type { PositioningFunc, InlineMceUIView, ClassicMceUIView, DecoupledMceUIView } from './view';

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
 * Base MCE
 */
export class MceBase extends Editor implements Observable, DataApi, EditorWithUI, ElementApi, Emitter {
	static builtinPlugins: Array<typeof Plugin | typeof ContextPlugin | string>;
	static defaultConfig?: HlxMceConfig;
	static create(sourceElementOrData: HTMLElement | string, config?: HlxMceConfig): Promise<MceBase>;

	readonly ui: EditorUI;
	readonly sourceElement: HTMLElement;

	constructor(sourceElementOrData: HTMLElement | string, config?: HlxMceConfig);

	getData(options?: { rootName?: string; trim?: 'empty' | 'none' }): string;
	setData(data: string): void;
	updateSourceElement(): void;
}

/**
 * Inline Mce
 */
export class MceInline extends MceBase {
	static create(sourceElementOrData: HTMLElement | string, config?: HlxMceConfig): Promise<MceInline>;
	readonly ui: InlineMceUI;
}

/**
 * Classic Mce
 */
export class MceClassic extends MceBase {
	static create(sourceElementOrData: HTMLElement | string, config?: HlxMceConfig): Promise<MceClassic>;
	readonly ui: ClassicMceUI;
}

/**
 * Classic Mce
 */
export class MceDecoupled extends MceBase {
	static create(sourceElementOrData: HTMLElement | string, config?: HlxMceConfig): Promise<MceDecoupled>;
	readonly ui: DecoupledMceUI;
}

declare const HlxMceBuilds: {
	BuildInline: typeof MceInline;
	BuildClassic: typeof MceClassic;
	BuildDecoupled: typeof MceDecoupled;
};

export default HlxMceBuilds;
