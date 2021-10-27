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
export interface MceBase extends Editor, Observable, DataApi, EditorWithUI, ElementApi, Emitter {
	builtinPlugins: Array<typeof Plugin | typeof ContextPlugin | string>;
	defaultConfig?: HlxMceConfig;
	create(sourceElementOrData: HTMLElement | string, config?: HlxMceConfig): Promise<MceBase>;

	readonly ui: EditorUI;
	readonly sourceElement: HTMLElement;

	(sourceElementOrData: HTMLElement | string, config?: HlxMceConfig);

	getData(options?: { rootName?: string; trim?: 'empty' | 'none' }): string;
	setData(data: string): void;
	updateSourceElement(): void;
}

/**
 * Inline Mce
 */
export interface MceInline extends MceBase {
	create(sourceElementOrData: HTMLElement | string, config?: HlxMceConfig): Promise<MceInline>;
	readonly ui: InlineMceUI;
}

/**
 * Classic Mce
 */
export interface MceClassic extends MceBase {
	create(sourceElementOrData: HTMLElement | string, config?: HlxMceConfig): Promise<MceClassic>;
	readonly ui: ClassicMceUI;
}

/**
 * Classic Mce
 */
export interface MceDecoupled extends MceBase {
	create(sourceElementOrData: HTMLElement | string, config?: HlxMceConfig): Promise<MceDecoupled>;
	readonly ui: DecoupledMceUI;
}

declare const HlxMceBuilds: {
	inline: MceInline;
	classic: MceClassic;
	decoupled: MceDecoupled;
};

export default HlxMceBuilds;
