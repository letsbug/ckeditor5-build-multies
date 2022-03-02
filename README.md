# CKEditor5-build-full

此包同时包含了`decoupled`、`inline`、`classic`这 3 个官方构建，且每个构建都使用的是同一个配置清单，功能上使用了 [ckeditor5-plugins](https://github.com/letsbug/ckeditor5-plugins) 插件包，该插件包包含了首行缩进、行高、段落间距、清除空行、清除多余空格、全半角转换、自定义图片上传文件 key、软换行转硬断行、快速排版、自定义扩展等功能。

[![npm version](https://badge.fury.io/js/%40ckeditor%2Fckeditor5-build-classic.svg)](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic)
[![Dependency Status](https://david-dm.org/letsbug/ckeditor5-build-full/status.svg)](https://david-dm.org/letsbug/ckeditor5-build-full)
[![devDependency Status](https://david-dm.org/letsbug/ckeditor5-build-full/dev-status.svg)](https://david-dm.org/letsbug/ckeditor5-build-full?type=dev)

此包基于 CKEditor5 进行构建，文档请移步 [build overview](https://ckeditor.com/docs/ckeditor5/latest/builds/index.html) 。

![CKEditor 5 classic editor build screenshot](./demo.png)

## Documentation

- [Installation](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installation.html).
- [Basic API](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/basic-api.html).
- [Configuration](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/configuration.html).

## Quick start

安装构建:

首先，本包发布在自建 npm 私有仓库，并未在互联网各大公共开源 npm 仓库发布，安装依赖之前，需要将你的镜像源切换为自建私有镜像源。

```shell
# 该仓库以 https://registry.npmjs.org/ 作为主要代理仓库，
# 以 https://registry.npm.taobao.org/ 作为备用代理仓库
# 以 http://10.3.196.23:8081/repository/npm-hosted/ 作为自建私有仓库
# 以 http://10.3.196.23:8081/repository/npm-hlw/ 作为仓库组合的聚合
npm config set --registry=http://10.3.196.23:8081/repository/npm-hlw/
```

然后就可以像平常一样安装依赖

```shell
$ npm i -S @hlx/ckeditor5-build-full
```

```shell
$ yarn add --dev @hlx/cli@beta
```

```shell
$ pnpm add -D @hlx/cli@beta
```

> 注意，慎用`yarn`和`cnpm`等三方包管理，除`pnpm`外，都太过简陋，依赖检测缺失，社区简单甚至没有社区。
> node 社区对包管理器的扩展插件开发(如`nrm`, `npm-check`, `depcheck`等)，
> 他们也基本全都基于官方原始的`npm`，并没有支持三方。完全依赖三方作者，可靠性低。功能、BUG 反馈从到修复和上线效率也相当低下。

推荐使用`nrm`来集中管理 node 镜像仓库，镜像源切换快速且直观

```shell
$ npm i -g nrm
$ nrm add hlw http://10.3.196.23:8081/repository/npm-hlw/
$ nrm use hlw
$ nrm ls
  npm ----------- https://registry.npmjs.org/
  yarn ---------- https://registry.yarnpkg.com/
  tencent ------- https://mirrors.cloud.tencent.com/npm/
  cnpm ---------- https://r.cnpmjs.org/
  taobao -------- https://registry.npmmirror.com/
  npmMirror ----- https://skimdb.npmjs.com/registry/
  hlw-hosted ---- http://10.3.196.23:8081/repository/npm-hosted/
* hlw ----------- http://10.3.196.23:8081/repository/npm-hlw/
```

cdn 使用:

```html
<div id="editor">
	<p>This is the editor content.</p>
</div>
<script src="./node_modules/@hlw/ckeditor5-build-full/build/ckeditor.js"></script>
<script>
	CKEDITOR.BuildClassic.create(document.querySelector('#editor'))
		.then((editor) => {
			window.editor = editor;
		})
		.catch((error) => {
			console.error('There was a problem initializing the editor.', error);
		});
</script>
```

node+npm 使用:

```js
import CKEditor from '@hlw/ckeditor5-build-full';

// 如果你使用的是 CommonJS:
// const CKEditor = require( '@ckeditor/ckeditor5-build-classic' );

CKEditor.BuildClassic.create(document.querySelector('#editor'))
	.then((editor) => {
		window.editor = editor;
	})
	.catch((error) => {
		console.error('There was a problem initializing the editor.', error);
	});
```

**Note:** 如果客观们想更深层次的进行集成，更好的进行自定义构建，本项目也可以作为一种参考，(eg: `src/ckeditor.js`). 官方文档： [Advanced setup guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html).

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license) 。
