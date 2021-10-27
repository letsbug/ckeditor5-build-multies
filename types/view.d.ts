import type {
	BalloonPanelView,
	EditorUIView,
	InlineEditableUIView,
	StickyPanelView,
	ToolbarView,
	ViewCollection,
} from '@ckeditor/ckeditor5-ui';
import type { Rect } from '@ckeditor/ckeditor5-utils';

export type PositioningFunc = (
	elRect: Rect,
	tarRect: Rect,
	viewportRect?: Rect
) => {
	top: number;
	left: number;
	name: number;
	config?: number;
};

/**
 * Inline Mce UI View
 */
export interface InlineMceUIView extends EditorUIView {
	editable: InlineEditableUIView;
	panel: BalloonPanelView;
	panelPosition: Array<PositioningFunc>;
	toolbar: ToolbarView;
	viewportTopOffset: number;
}

/**
 * Classic Mce UI View
 */
export interface ClassicMceUIView extends EditorUIView {
	editable: InlineEditableUIView;
	main?: ViewCollection;
	stickyPanel?: StickyPanelView;
	toolbar: ToolbarView;
	top?: ViewCollection;
}

/**
 * Decoupled MCE UI View
 */
export interface DecoupledMceUIView extends EditorUIView {
	editable: InlineEditableUIView;
	toolbar: ToolbarView;
}
