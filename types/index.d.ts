import type { ContextPlugin, Editor, EditorUI, Plugin } from '@ckeditor/ckeditor5-core';
import type { DataApi } from '@ckeditor/ckeditor5-core/src/editor/utils/dataapimixin';
import type { EditorWithUI } from '@ckeditor/ckeditor5-core/src/editor/editorwithui';
import type { ElementApi } from '@ckeditor/ckeditor5-core/src/editor/utils/elementapimixin';
import type { Emitter } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import type { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import type { ClassicMceUI, DecoupledMceUI, InlineMceUI } from './ui';
import type { HlxMceConfig } from './configuration';

export * from './configuration';

export type { InlineMceUI, ClassicMceUI, DecoupledMceUI } from './ui';

export type { PositioningFunc, InlineMceUIView, ClassicMceUIView, DecoupledMceUIView } from './view';

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
