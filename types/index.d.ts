import { Editor, EditorUI } from '@ckeditor/ckeditor5-core';
import { Element } from '@ckeditor/ckeditor5-engine';
import { PluginInterface } from '@ckeditor/ckeditor5-core/src/plugin';
import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';
import { DataApi } from '@ckeditor/ckeditor5-core/src/editor/utils/dataapimixin';
import { EditorWithUI } from '@ckeditor/ckeditor5-core/src/editor/editorwithui';
import { ElementApi } from '@ckeditor/ckeditor5-core/src/editor/utils/elementapimixin';

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

export interface ParagraphSpacingConfig {
	options?: number[];
	unit?: 'px' | '%';
}

export interface FindReplaceConfig {
	type?: 'find' | 'replace' | 'replaceAll' | 'reset';
	position?: 'prev' | 'next' | 'none';
	key?: string[];
	replace?: string;
}

export interface HlxRichConfig extends EditorConfig {
	fontColor?: FontColorConfig;
	mediaEmbed?: MediaEmbedConfig;
	simpleUpload?: SimpleUploadConfig;
	lineHeight?: LineHeightConfig;
	counter?: CounterConfig;
	extensions?: Array<ExtensionsConfig>;
}

export class HlxRichEditor extends Editor implements DataApi, EditorWithUI, ElementApi {
	readonly ui: EditorUI;

	readonly sourceElement: HTMLElement;

	getData(options?: { rootName?: string; trim?: 'empty' | 'none' }): string;

	setData(data: string): void;

	updateSourceElement(): void;
}

/**
 * The CKEditor5 editor constructor.
 */
export interface HlxRichBuilder {
	builtinPlugins: Array<PluginInterface>;
	defaultConfig: HlxRichConfig;
	create(sourceElementOrData: HTMLElement | string, config?: HlxRichConfig): Promise<HlxRichEditor>;
}

export interface HlxRichPackage {
	DocumentBuild: HlxRichBuilder;
	InlineBuild: HlxRichBuilder;
	ClassicBuild: HlxRichBuilder;
}

declare const HlxRichPkg: HlxRichPackage;

export default HlxRichPkg;
