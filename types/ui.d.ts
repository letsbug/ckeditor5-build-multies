import type { EditorUI } from '@ckeditor/ckeditor5-core';
import type { ClassicMceUIView, DecoupledMceUIView, InlineMceUIView } from './view';

/**
 * Inline Mce UI
 */
export class InlineMceUI extends EditorUI {
	view: InlineMceUIView;
}

/**
 * Classic Mce UI
 */
export class ClassicMceUI extends EditorUI {
	view: ClassicMceUIView;
}

/**
 * Decoupled Mce UI
 */
export class DecoupledMceUI extends EditorUI {
	view: DecoupledMceUIView;
}
