import { computed, defineComponent, nextTick, onMounted, ref, unref } from 'vue';
import CKInspector from '@ckeditor/ckeditor5-inspector';
import HlxMce from '@hlx/mce';
import type { MceConfig, MceBase } from '../../types';
import { presetData } from './data';

const navConf = [
	{ name: 'Classic Build', type: 'classic' },
	{ name: 'Balloon Build', type: 'balloon' },
	{ name: 'Inline Build', type: 'inline' },
];

let ckInstance: MceBase | null = null;

const App = defineComponent({
	setup() {
		const ckRoot = ref<HTMLElement>(null);
		const ckToolbar = ref<HTMLElement>(null);
		const ckContent = ref<HTMLElement>(null);

		const type = ref('classic');
		const config = computed(() => {
			const baseConf: MceConfig = {
				ui: {
					viewportOffset: { top: 80 },
				} as any,
			};

			return baseConf;
		});

		const initial = async () => {
			// eslint-disable-next-line no-console
			// console.log(HlxMce[type.value].builtinPlugins);
			ckInstance = await HlxMce[type.value].create(unref(ckContent), config);
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

		// const log = () => {
		// 	ckInstance.execute('highlightSpecific', { words: ['this'] });
		// };
		//
		// const checkResult = () => {
		// 	// eslint-disable-next-line no-console
		// 	console.log(ckInstance.getData());
		// };

		onMounted(async () => {
			await initial();
		});

		return () => {
			const mainClass = {
				'ck-main': true,
				// 'build-decoupled': type.value === 'BuildDecoupled',
				'build-balloon': type.value === 'BuildBalloon',
				'build-classic': type.value === 'BuildClassic',
				'build-inline': type.value === 'BuildInline',
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
						{/*<button onClick={log}>log highlight specific operate</button>
						<button onClick={checkResult}>log which highlight specific marker in data</button>*/}

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
