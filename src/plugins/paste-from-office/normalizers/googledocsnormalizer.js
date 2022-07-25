import { UpcastWriter } from '@ckeditor/ckeditor5-engine';

import removeBoldWrapper from '../filters/removeboldwrapper';
import { unwrapParagraphInListItem } from '../filters/list';

const googleDocsMatch = /id=(["'])docs-internal-guid-[\da-f-]+(["'])/i;

/**
 * Normalizer for the content pasted from Google Docs.
 *
 * @implements module:paste-from-office/normalizer~Normalizer
 */
export default class GoogleDocsNormalizer {
	/**
	 * Creates a new `GoogleDocsNormalizer` instance.
	 *
	 * @param {module:engine/view/document~Document} document View document.
	 */
	constructor(document) {
		/**
		 * @readonly
		 * @type {module:engine/view/document~Document}
		 */
		this.document = document;
	}

	/**
	 * @inheritDoc
	 */
	isActive(htmlString) {
		return googleDocsMatch.test(htmlString);
	}

	/**
	 * @inheritDoc
	 */
	execute(data) {
		const writer = new UpcastWriter(this.document);
		const { body: documentFragment } = data._parsedData;

		removeBoldWrapper(documentFragment, writer);
		unwrapParagraphInListItem(documentFragment, writer);

		data.content = documentFragment;
	}
}
