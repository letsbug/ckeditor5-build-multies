# CKEditor5-build-full

此包同时包含了document、inline、classic这3个官方构建，且每个构建都使用的是同一个配置清单，功能上使用了 [ckeditor5-plugins](https://github.com/letsbug/ckeditor5-plugins) 插件包，该插件包包含了首行缩进、行高、段落间距、清除空行、清除多余空格、全半角转换、自定义图片上传文件key、软换行转硬断行、快速排版、自定义扩展等功能。


[![npm version](https://badge.fury.io/js/%40ckeditor%2Fckeditor5-build-classic.svg)](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic)
[![Dependency Status](https://david-dm.org/letsbug/ckeditor5-build-full/status.svg)](https://david-dm.org/letsbug/ckeditor5-build-full)
[![devDependency Status](https://david-dm.org/letsbug/ckeditor5-build-full/dev-status.svg)](https://david-dm.org/letsbug/ckeditor5-build-full?type=dev)

此包基于 CKEditor5 进行构建，文档请移步 [build overview](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/overview.html)。

![CKEditor 5 classic editor build screenshot](./demo.png)

## Documentation

* [Installation](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installation.html).
* [Basic API](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/basic-api.html).
* [Configuration](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/configuration.html).

## Quick start

安装构建:

```bash
# 目前本人自用采用npm私服安装，未发布到npm官方仓库，客观们可以使用如下命令安装：
npm i -S https://github.com/letsbug/ckeditor5-build-full.git

# or (if you have configured github's SSH key locally)
npm i -S git://git@github.com:letsbug/ckeditor5-build-full.git
```

cdn使用:

```html
<div id="editor">
	<p>This is the editor content.</p>
</div>
<script src="./node_modules/@hlw/ckeditor5-build-full/build/ckeditor.js"></script>
<script>
	CKEDITOR.ClassicBuild
		.create( document.querySelector( '#editor' ) )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( error => {
			console.error( 'There was a problem initializing the editor.', error );
		} );
</script>
```

webpack使用:

```js
import CKEditor from '@hlw/ckeditor5-build-full';

// 如果你使用的是 CommonJS:
// const CKEditor = require( '@ckeditor/ckeditor5-build-classic' );

CKEditor.ClassicBuild
	.create( document.querySelector( '#editor' ) )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
	} );
```

**Note:** 如果客观们想更深层次的进行集成，更好的进行自定义构建，本项目也可以作为一种参考，(eg: `src/ckeditor.js`). 官方文档： [Advanced setup guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html).

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license).
