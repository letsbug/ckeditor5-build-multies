/**
 * @module image-captions/index
 */

import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageCaptionEditing from './editing';
import ImageCaptionUI from './ui';

import '@ckeditor/ckeditor5-image/theme/imagecaption.css';

/**
 * The image caption plugin.
 *
 * For a detailed overview, check the {@glink features/images/images-captions image caption} documentation.
 *
 * @augments module:core/plugin~Plugin
 */
export class ImageCaption extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ImageCaptionEditing, ImageCaptionUI];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'ImageCaption';
	}
}
