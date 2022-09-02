/**
 * A plugin that converts custom attributes for elements that are wrapped in <figure> in the view.
 *
 * @see https://ckeditor.com/docs/ckeditor5/latest/framework/guides/deep-dive/conversion/conversion-preserving-custom-content.html
 */

import { Plugin } from '@ckeditor/ckeditor5-core';

class AttributeWhitelist extends Plugin {
	/**
	 * @inheritDoc
	 * @param editor
	 */
	constructor(editor) {
		super(editor);

		this.options = this.editor.config.get('attributeWhitelist') ?? [];
	}

	/**
	 * @inheritDoc
	 *
	 * Sets the conversion up and extends the table & image features schema.
	 * <br>
	 *
	 * **Note:** `Schema extending must be done in the "afterInit()" call because plugins define their schema in "init()".`
	 */
	afterInit() {
		const plugins = this.editor.plugins;

		const options = this.options?.reduce((pre, { name, model }) => {
			if (!this._isKebabCase(name)) {
				return pre;
			}
			if (model === 'image') {
				return [...pre, { name, model: 'imageBlock' }, { name, model: 'imageInline' }];
			}
			return [...pre, { name, model }];
		}, []);

		for (const { name: viewAttribute, model: modelElName } of options) {
			const pluginName = this._toCapitalize(modelElName);
			if (!plugins.has(pluginName)) {
				continue;
			}
			const viewElName = ['imageBlock', 'imageInline'].includes(modelElName) ? 'img' : modelElName;
			this._setupConversion(viewElName, modelElName, viewAttribute);
		}
	}

	/**
	 *
	 * Sets up a conversion for a custom attribute on the view elements contained inside a <figure>.
	 *
	 * This method:
	 * - Adds proper schema rules.
	 * - Adds an upcast converter.
	 * - Adds a downcast converter.
	 *
	 * @param viewElName - eg: img、p、table
	 * @param modelElName - eg: imageBlock、imageInline、paragraph、table
	 * @param viewAttr - attribute name
	 */
	_setupConversion(viewElName, modelElName, viewAttr) {
		const editor = this.editor;

		// Extends the schema to store an attribute in the model.
		// const modelAttr = `custom${this._toPascalCase(viewAttr)}`;
		editor.model.schema.extend(modelElName, { allowAttributes: [viewAttr] });

		// editor.conversion.for('upcast').add(this._upcast(viewElName, viewAttr, modelAttr));
		editor.conversion.for('upcast').attributeToAttribute({
			view: { name: viewElName, key: viewAttr },
			model: viewAttr,
		});
		editor.conversion.for('downcast').add(this._downcast(modelElName, viewElName, viewAttr));
	}

	// /**
	//  * Returns the custom attribute upcast converter.
	//  *
	//  * @param viewElName
	//  * @param viewAttribute
	//  * @param modelAttribute
	//  */
	// _upcast(viewElName, viewAttribute, modelAttribute) {
	// 	return (dispatcher) => {
	// 		dispatcher.on(`element:${viewElName}`, (evt, data, conversionApi) => {
	// 			const { viewItem, modelRange } = data;
	// 			const modelElement = modelRange && modelRange.start.nodeAfter;
	//
	// 			if (!modelElement) {
	// 				return;
	// 			}
	// 			conversionApi.writer.setAttribute(
	// 				modelAttribute,
	// 				viewItem.getAttribute(viewAttribute) ?? '',
	// 				modelElement
	// 			);
	// 		});
	// 	};
	// }

	/**
	 * Returns the custom attribute downcast converter.
	 *
	 * @param modelElName
	 * @param viewElName
	 * @param viewAttr
	 */
	_downcast(modelElName, viewElName, viewAttr) {
		return (dispatcher) => {
			// dispatcher.on(`insert:${modelElName}`, (evt, data, conversionApi) => {
			dispatcher.on(`attribute:${viewAttr}:${modelElName}`, (evt, data, conversionApi) => {
				const viewFigure = conversionApi.mapper.toViewElement(data.item);
				const viewElement = this._findViewChild(viewFigure, viewElName, conversionApi);

				if (!viewElement) {
					return;
				}

				conversionApi.writer.setAttribute(data.attributeKey, data.attributeNewValue, viewElement);
			});
		};
	}

	/**
	 * Helper method that searches for a given view element in all children of the model element.
	 *
	 * @param viewFigure
	 * @param viewElName
	 * @param conversionApi
	 */
	_findViewChild(viewFigure, viewElName, conversionApi) {
		const viewChildren = [...conversionApi.writer.createRangeIn(viewFigure).getItems()];
		return viewChildren.find((item) => item.is('element', viewElName));
	}

	// _findViewElementFromWidget(viewFigure) {
	// 	const figureChildren = [];
	//
	// 	for (const figureChild of viewFigure.getChildren()) {
	// 		figureChildren.push(figureChild);
	//
	// 		if (figureChild.is('element')) {
	// 			figureChildren.push(...figureChild.getChildren());
	// 		}
	// 	}
	//
	// 	return figureChildren.find((viewChild) => viewChild.is('element', 'img'));
	// }

	/**
	 * 校验是否为全小写的连字字符串
	 *
	 * @param word {string}
	 * @return {boolean}
	 * @private
	 */
	_isKebabCase(word) {
		return typeof word === 'string' && /^([a-z]+)(-?([a-z]+))*$/.test(word);
	}

	// /**
	//  * 转换为首字母大写的驼峰字符串
	//  *
	//  * @param word {string}
	//  * @return {string}
	//  * @private
	//  */
	// _toPascalCase(word) {
	// 	return word.split('-').reduce((p, c) => `${p}${this._toCapitalize(c)}`, '');
	// }

	/**
	 * 首字母大写转换
	 *
	 * @param word {string}
	 * @return {string}
	 * @private
	 */
	_toCapitalize(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}
}

export { AttributeWhitelist };

/**
 * @typedef AttributeWhitelistOption
 * @property {string} name - 属性名
 * @property {string} model - 对应视图模型
 */
