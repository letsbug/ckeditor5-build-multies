import type { ContextPlugin, Editor, EditorUI, Plugin } from '@ckeditor/ckeditor5-core';
import type { DataApi } from '@ckeditor/ckeditor5-core/src/editor/utils/dataapimixin';
import type { EditorWithUI } from '@ckeditor/ckeditor5-core/src/editor/editorwithui';
import type { ElementApi } from '@ckeditor/ckeditor5-core/src/editor/utils/elementapimixin';
import type { Emitter } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import type { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import type { BalloonMceUI, ClassicMceUI, InlineMceUI } from './ui';
import type { MceConfig } from './configuration';

export * from './configuration';

export type { InlineMceUI, ClassicMceUI, DecoupledMceUI, BalloonMceUI } from './ui';

export type { PositioningFunc, InlineMceUIView, ClassicMceUIView, DecoupledMceUIView } from './view';

/**
 * Base MCE
 */
export interface MceBase extends Editor, Observable, DataApi, EditorWithUI, ElementApi, Emitter {
	builtinPlugins: Array<typeof Plugin | typeof ContextPlugin | string>;
	defaultConfig?: MceConfig;
	create(sourceElementOrData: HTMLElement | string, config?: MceConfig): Promise<MceBase>;

	readonly ui: EditorUI;
	readonly sourceElement: HTMLElement;

	(sourceElementOrData: HTMLElement | string, config?: MceConfig);

	getData(options?: { rootName?: string; trim?: 'empty' | 'none' }): string;
	setData(data: string): void;
	updateSourceElement(): void;
	enableReadOnlyMode(lockId: string): void;
	disableReadOnlyMode(lockId: string): void;
}

/**
 * Inline Mce
 */
export interface MceInline extends MceBase {
	create(sourceElementOrData: HTMLElement | string, config?: MceConfig): Promise<MceInline>;
	readonly ui: InlineMceUI;
}

/**
 * Classic Mce
 */
export interface MceClassic extends MceBase {
	create(sourceElementOrData: HTMLElement | string, config?: MceConfig): Promise<MceClassic>;
	readonly ui: ClassicMceUI;
}

/**
 * Classic Mce
 */
export interface MceBalloon extends MceBase {
	create(sourceElementOrData: HTMLElement | string, config?: MceConfig): Promise<MceBalloon>;
	readonly ui: BalloonMceUI;
}

declare const HlxMce: {
	inline: MceInline;
	classic: MceClassic;
	balloon: MceBalloon;
};

export default HlxMce;
