import type { EditorUI } from '@ckeditor/ckeditor5-core';
import type {
	BalloonMceUIView,
	ClassicMceUIView,
	DecoupledMceUIView,
	InlineMceUIView,
} from './view';

/**
 * Inline Mce UI
 */
export interface InlineMceUI extends EditorUI {
	view: InlineMceUIView;
}

/**
 * Classic Mce UI
 */
export interface ClassicMceUI extends EditorUI {
	view: ClassicMceUIView;
}

/**
 * Decoupled Mce UI
 */
export interface DecoupledMceUI extends EditorUI {
	view: DecoupledMceUIView;
}

export interface BalloonMceUI extends EditorUI {
	view: BalloonMceUIView;
}
