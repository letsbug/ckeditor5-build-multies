import type {
	BalloonPanelView,
	EditorUIView,
	InlineEditableUIView,
	StickyPanelView,
	ToolbarView,
	ViewCollection,
} from '@ckeditor/ckeditor5-ui';
import { Rect } from '@ckeditor/ckeditor5-utils';

export function PositioningFunc(
	elRect: Rect,
	tarRect: Rect,
	viewportRect?: Rect
): {
	top: number;
	left: number;
	name: number;
	config?: number;
};

/**
 * Inline Mce UI View
 */
export class InlineMceUIView extends EditorUIView {
	editable: InlineEditableUIView;
	panel: BalloonPanelView;
	panelPosition: Array<typeof PositioningFunc>;
	toolbar: ToolbarView;
	viewportTopOffset: number;
}

/**
 * Classic Mce UI View
 */
export class ClassicMceUIView extends EditorUIView {
	editable: InlineEditableUIView;
	main?: ViewCollection;
	stickyPanel?: StickyPanelView;
	toolbar: ToolbarView;
	top?: ViewCollection;
}

/**
 * Decoupled MCE UI View
 */
export class DecoupledMceUIView extends EditorUIView {
	editable: InlineEditableUIView;
	toolbar: ToolbarView;
}
