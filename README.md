# @hlx/mce

基于`CKEditor5`封装的，所见即所得的，适合中文排版的富文本编辑器。

此包同时包含了`decoupled`、`inline`、`classic`这 3 个官方构建，且每个构建都使用的是同一个配置清单。

此包基于 CKEditor5 进行构建，文档请移步 [build overview](https://ckeditor.com/docs/ckeditor5/latest/builds/index.html) 。

![CKEditor 5 classic editor build screenshot](./demo.png)

## Builtin Plugins

- **attribute-whitelist**: 配置 html 元素属性白名单
- **clear-empty**: 清除空行
- **clear-space**: 清除多余空格，首、尾、文中一个以上(仅保留一个)
- **convert-full-half**: 全角/半角字符转换
- **counter**: 字符数/字数统计
- **extensions**: toolbar 自定义按钮
- **format-painter**: 格式刷
- **highlight-specific**: 指定字符/词组高亮
- **image-caption**: 重写官方插件，修改插件行为
- **indent-first**: 首行缩进
- **outline**: 字符轮廓线样式
- **line-height**: 行高
- **paragraph-spacing**: 段落间距
- **paste-from-office**: 重写官方插件，以支持国内的`WPS`环境
- **quick-style**: 快速排版
- **simple-adapter**: 图片上传适配器
- **soft-break-to-enter**: 普通换行转换为段落断行

## Documentation

- [Installation](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installation.html).
- [Basic API](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/basic-api.html).
- [Configuration](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/configuration.html).

## Usages

cdn 使用:

```html
<head>
	<link rel="stylesheet" href="./node_modules/@hlx/mce/dist/content-style.css" />
</head>
<body>
	<div id="editor">
		<p>This is the editor content.</p>
	</div>
	<script src="./node_modules/@hlw/mce/dist/hlx-mce.js"></script>
	<script>
		HlxMce.classic
			.create(document.querySelector('#editor'))
			.then((editor) => {
				window.editor = editor;
			})
			.catch((error) => {
				console.error('There was a problem initializing the editor.', error);
			});
	</script>
</body>
```

node+npm 使用:

```js
import HlxMce from '@hlw/mce';

HlxMce.classic
	.create(document.querySelector('#editor'), {
		/*...config*/
	})
	.then((editor) => {
		window.editor = editor;
	})
	.catch((error) => {
		console.error('There was a problem initializing the editor.', error);
	});
```

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license) 。
