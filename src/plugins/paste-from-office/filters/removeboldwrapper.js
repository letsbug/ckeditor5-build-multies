/**
 * @module paste-from-office/filters/removeboldwrapper
 */

/**
 * Removes `<b>` tag wrapper added by Google Docs to a copied content.
 *
 * @param {module:engine/view/documentfragment~DocumentFragment} documentFragment element `data.content` obtained from clipboard
 * @param {module:engine/view/upcastwriter~UpcastWriter} writer
 */
export default function removeBoldWrapper(documentFragment, writer) {
	for (const child of documentFragment.getChildren()) {
		if (child.is('element', 'b') && child.getStyle('font-weight') === 'normal') {
			const childIndex = documentFragment.getChildIndex(child);

			writer.remove(child);
			writer.insertChild(childIndex, child.getChildren(), documentFragment);
		}
	}
}
