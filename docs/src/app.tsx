import { computed, defineComponent, nextTick, onMounted, ref, unref } from 'vue';
import CKInspector from '@ckeditor/ckeditor5-inspector';
import HlxMce from '@hlx/mce';
import type { MceConfig, MceBase } from '../../types';
import { presetData } from './data';

const navConf = [
	{ name: 'Classic Mode', type: 'classic' },
	{ name: 'Balloon Mode', type: 'balloon' },
	{ name: 'Inline Mode', type: 'inline' },
];

let ckInstance: MceBase | null = null;
const icon = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>`;

const App = defineComponent({
	setup() {
		const ckRoot = ref<HTMLElement>(null);
		const ckToolbar = ref<HTMLElement>(null);
		const ckContent = ref<HTMLElement>(null);

		const type = ref('classic');
		const config = computed(() => {
			const baseConf: MceConfig = {
				ui: { viewportOffset: { top: 133 } } as any,
				extensions: [{ name: 'extDemo', icon, command: extCommand, label: 'Ext Demo' }],
				toolbar: { items: [...HlxMce[type.value].defaultConfig.toolbar.items, '|', 'extDemo'] },
				image: {
					defaultCaption: (image) => {
						// eslint-disable-next-line no-console
						console.log('toggled a caption view for:', image);
						return 'This is a default filled caption. You can modify and switch at will, after modification switch is able to save the modification yo!';
					},
				},
				attributeWhitelist: [
					{ name: 'data-id', model: 'image' },
					{ name: 'data-origin', model: 'image' },
					{ name: 'data-title', model: 'image' },
					{ name: 'data-table-demo', model: 'table' },
				],
			};

			return baseConf;
		});

		const initial = async () => {
			ckInstance = await HlxMce[type.value].create(unref(ckContent), config.value);
			CKInspector.attach(ckInstance);
		};

		const dispose = async () => {
			if (!ckInstance) return;
			await ckInstance.destroy();
			ckToolbar.value.innerHTML = '';
			ckInstance = null;
		};

		const checkType = async (t) => {
			type.value = t;
			await dispose();
			await nextTick();
			await initial();
		};

		const extCommand = () => {
			// eslint-disable-next-line no-console
			console.log('The "Ext Demo" extension execute!');
		};

		const highlightYellow = () => {
			ckInstance.execute('highlightSpecific', { words: ['this'] });
		};

		const highlightRed = () => {
			ckInstance.execute('highlightSpecific', { words: ['Shift'], color: 'red' });
		};

		const getData = () => {
			// eslint-disable-next-line no-console
			console.log(ckInstance.getData());
		};

		const insertCustomAttrImage = () => {
			const ckModel = ckInstance.model;
			ckModel.change((writer) => {
				const position = writer.createPositionAt(ckModel.document.getRoot(), 'end');
				writer.insertElement(
					'imageBlock',
					{
						src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
						'data-title': 'google logo',
					},
					position
				);
			});
		};

		onMounted(async () => {
			await initial();
		});

		return () => {
			const mainClass = {
				'ck-main': true,
				// 'build-decoupled': type.value === 'BuildDecoupled',
				'build-balloon': type.value === 'balloon',
				'build-classic': type.value === 'classic',
				'build-inline': type.value === 'inline',
			};
			const navs = navConf.map((n) => (
				<li class={{ active: n.type === type.value }} onClick={() => checkType(n.type)}>
					{n.name}
				</li>
			));
			return (
				<>
					<div class="header">
						<ul class="navi">{navs}</ul>
					</div>

					<div class="main-wrapper">
						<div class="actions">
							<button onClick={highlightYellow}>highlight "this" words by yellow</button>
							<button onClick={highlightRed}>highlight "Shift" words by red</button>
							<button onClick={getData}>get data</button>
							<button onClick={insertCustomAttrImage}>Insert Custom Attribute Image</button>
						</div>

						<div ref={ckRoot} class="main">
							<div ref={ckToolbar} class="ck-decoupled-toolbar" />
							<div class={mainClass}>
								<div ref={ckContent} class="ck-content">
									{presetData}
								</div>
							</div>
						</div>
					</div>
				</>
			);
		};
	},
});

export default App;
