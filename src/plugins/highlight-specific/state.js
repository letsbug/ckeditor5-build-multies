import { Collection, mix, ObservableMixin } from '@ckeditor/ckeditor5-utils';

export class HighlightSpecificState {
	/**
	 *
	 * @param {module:engine/model/model~Model} model model
	 * @param {HighlightSpecificConfig} config
	 */
	constructor(model, config) {
		for (const color of Object.keys(config)) {
			this.set(color, new Collection());
		}

		// this.results.on('change', (eventInfo));
	}

	clear(model, color) {
		model.change((writer) => {
			for (const { marker } of this[color]) {
				writer.removeMarker(marker);
			}
		});

		this[color].clear();
	}
}

mix(HighlightSpecificState, ObservableMixin);
