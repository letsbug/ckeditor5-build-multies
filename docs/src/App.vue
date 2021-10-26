<template>
	<div class="header">
		<ul class="navi">
			<template v-for="(n, i) in nav" :key="i">
				<li :class="{ active: n.type === type }" @click="() => checkType(n.type)">{{ n.name }}</li>
			</template>
		</ul>
	</div>

	<div class="main">
		<div ref="ckRoot" class="ck-content">
			<h4>Sample&nbsp;&nbsp;&nbsp;&nbsp;</h4>

			<figure class="media">
				<oembed url="https://www.youtube.com/watch?v=H08tGjXNHO4"></oembed>
			</figure>

			<p>&nbsp;&nbsp;&nbsp;&nbsp;</p>

			<p id="spaceDemo">
				&nbsp;&nbsp;&nbsp;This is an instance &nbsp;&nbsp;of the &nbsp;&nbsp;&nbsp;<a
					href="https://ckeditor.com/docs/ckeditor5/latest/builds/guides/overview.html#classic-editor"
					>&nbsp;&nbsp;classic editor build&nbsp;</a
				>&nbsp;&nbsp;.&nbsp;&nbsp;
			</p>

			<figure class="image">
				<img src="/sample.jpg" alt="Autumn fields" />
			</figure>

			<p>
				You can use this sample to validate whether your <br /><a
					href="https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html"
					>custom build</a
				><BR /> works fine.
			</p>

			<p>
				这一个段落用来测试 Shift + Enter 转 Enter的<span style="color: red">功能</span> <br />
				换行了 <br />
				又换行了 <br />
				最后一行 <br /><br /><br />
			</p>

			<p>
				这一个段落用来测试多段落 Shift + Enter 转 Enter的<span style="color: red">功能</span> <br />
				换行了 <br />
				又换行了 <br />
				最后一行 <br /><br /><br />
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import HlxMceBuilds from '@hlx/ckeditor5-build-multies';
import type { MceBase } from '../../types';

type MceBuildType = keyof typeof HlxMceBuilds;

export default defineComponent({
	data() {
		return {
			nav: [
				{ name: 'Classic Build', type: 'BuildClassic' },
				{ name: 'Decoupled Build', type: 'BuildDecoupled' },
				{ name: 'Inline Build', type: 'BuildInline' },
			],
		};
	},
	setup() {
		const type = ref<MceBuildType>('BuildClassic');
		const instance = ref<typeof MceBase>(null);

		const initial = async () => {
			const ckRoot = document.querySelector('.ck-content');
			instance.value = await (HlxMceBuilds[type.value] as any).create(ckRoot);
		};

		const checkType = async (t: MceBuildType) => {
			type.value = t;
			await initial();
		};

		onMounted(() => {
			initial();
		});

		return { instance, type, checkType };
	},
});
</script>

<style scoped>
.navi {
	height: 56px;
}
</style>
