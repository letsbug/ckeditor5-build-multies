import { computed, defineComponent, nextTick, onMounted, ref, unref } from 'vue';
import HlxMceBuilds from '@hlx/ckeditor5-build-multies';
import type { HlxMceConfig, MceBase } from '../../types';
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
			const baseConf: HlxMceConfig = {
				toolbar: {
					viewportTopOffset: 80,
				},
			};

			return baseConf;
		});

		const initial = async () => {
			ckInstance = await HlxMceBuilds[type.value].create(unref(ckContent), config);
			// if (type.value === 'BuildDecoupled') {
			// 	ckToolbar.value.appendChild((ckInstance as MceDecoupled).ui.view.toolbar.element);
			// }
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
