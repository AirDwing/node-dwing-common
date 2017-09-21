# Dwing Common

[![github](https://img.shields.io/github/followers/willin.svg?style=social&label=Follow)](https://github.com/willin) [![npm](https://img.shields.io/npm/v/@dwing/common.svg)](https://npmjs.org/package/@dwing/common) [![npm](https://img.shields.io/npm/dt/@dwing/common.svg)](https://npmjs.org/package/@dwing/common) [![codecov](https://codecov.io/gh/AirDwing/node-dwing-common/branch/master/graph/badge.svg)](https://codecov.io/gh/AirDwing/node-dwing-common) [![Travis-CI](https://travis-ci.org/AirDwing/node-dwing-common.svg?branch=master)](https://travis-ci.org/AirDwing/node-dwing-common) [![codebeat badge](https://codebeat.co/badges/49922bb9-ef93-4286-9fd0-3c2f0d595f3c)](https://codebeat.co/projects/github-com-airdwing-node-dwing-common-master) [![API Doc](https://doclets.io/AirDwing/node-dwing-common/master.svg)](https://doclets.io/AirDwing/node-dwing-common/master)

## 安装

```
npm install @dwing/common --save
```

## 使用

ES7:

```js
const {md5} = require('@dwing/common');

console.log(md5('1'));
```

## 具体参数

### Members

#### <span class="type-signature"></span>isNumber<span class="type-signature"></span>

<div class="description">

判断是否为数字

</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 77](index.js.html#line77)

</dd>

</dl>

#### <span class="type-signature"></span>isObject<span class="type-signature"></span>

<div class="description">

判断是否为对象

</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 84](index.js.html#line84)

</dd>

</dl>

#### <span class="type-signature"></span>uuid<span class="type-signature"></span>

<div class="description">

生成GUID

</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 52](index.js.html#line52)

</dd>

</dl>

### Methods

#### <span class="type-signature"></span>formatDate<span class="signature">(inputPattern, inputDate)</span> <span class="type-signature">→ {string}</span>

<div class="description">

格式化时间

</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`inputPattern`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">

时间格式,默认为'yyyy-MM-dd hh:mm:ss'

</td>

</tr>

<tr>

<td class="name">`inputDate`</td>

<td class="type"><span class="param-type">any</span></td>

<td class="description last">

输入时间,默认为当前

</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 25](index.js.html#line25)

</dd>

</dl>

##### Returns:

<div class="param-desc">

格式化的时间

</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">string</span></dd>

</dl>

#### <span class="type-signature"></span>getDefer<span class="signature">()</span> <span class="type-signature">→ {Promise.defer}</span>

<div class="description">

getDefer

</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 161](index.js.html#line161)

</dd>

</dl>

##### Returns:

<div class="param-desc">

defer对象

</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">Promise.defer</span></dd>

</dl>

#### <span class="type-signature"></span>getMobile<span class="signature">(mobile)</span> <span class="type-signature">→ {string}</span>

<div class="description">

获取手机号码

</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`mobile`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">

手机号字符串

</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 273](index.js.html#line273)

</dd>

</dl>

##### Returns:

<div class="param-desc">

非手机号返回空字符串,否则返回去掉+86的手机号码

</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">string</span></dd>

</dl>

#### <span class="type-signature"></span>getTimestamp<span class="signature">()</span> <span class="type-signature">→ {int}</span>

<div class="description">

获取UNIX标准时间戳

</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 13](index.js.html#line13)

</dd>

</dl>

##### Returns:

<div class="param-desc">

UNIX标准时间戳

</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">int</span></dd>

</dl>

#### <span class="type-signature"></span>hmac<span class="signature">(str, type, key)</span> <span class="type-signature">→ {string}</span>

<div class="description">

Hmac

</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`str`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">

待加密字符串

</td>

</tr>

<tr>

<td class="name">`type`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">

sha1或sha256

</td>

</tr>

<tr>

<td class="name">`key`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">

密钥

</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 214](index.js.html#line214)

</dd>

</dl>

##### Returns:

<dl>

<dt>Type</dt>

<dd><span class="param-type">string</span></dd>

</dl>

#### <span class="type-signature"></span>int2ip<span class="signature">(num)</span> <span class="type-signature">→ {string}</span>

<div class="description">

INT2IP

</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`num`</td>

<td class="type"><span class="param-type">int</span></td>

<td class="description last">

IP数值

</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 242](index.js.html#line242)

</dd>

</dl>

##### Returns:

<div class="param-desc">

IP地址，如1.2.3.4

</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">string</span></dd>

</dl>

#### <span class="type-signature"></span>ip2int<span class="signature">(ip)</span> <span class="type-signature">→ {number}</span>

<div class="description">

IP2INT

</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`ip`</td>

<td class="type"><span class="param-type">str</span></td>

<td class="description last">

IP地址，如1.2.3.4

</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 225](index.js.html#line225)

</dd>

</dl>

##### Returns:

<div class="param-desc">

IP数值

</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">number</span></dd>

</dl>

#### <span class="type-signature"></span>isEmpty<span class="signature">(obj)</span> <span class="type-signature">→ {boolean}</span>

<div class="description">

判断是否为空

</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`obj`</td>

<td class="type"><span class="param-type">*</span></td>

<td class="description last">

任意

</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 95](index.js.html#line95)

</dd>

</dl>

##### Returns:

<div class="param-desc">

真为空，假为非空

</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">boolean</span></dd>

</dl>

#### <span class="type-signature"></span>isNumberString<span class="signature">(obj)</span> <span class="type-signature">→ {boolean}</span>

<div class="description">

判断是否为数字字符串

</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`obj`</td>

<td class="type"><span class="param-type">*</span></td>

<td class="description last">

任意

</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 65](index.js.html#line65)

</dd>

</dl>

##### Returns:

<div class="param-desc">

是否为数字字符串

</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">boolean</span></dd>

</dl>

#### <span class="type-signature"></span>md5<span class="signature">(str)</span> <span class="type-signature">→ {string}</span>

<div class="description">

MD5

</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`str`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last"></td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 179](index.js.html#line179)

</dd>

</dl>

##### Returns:

<dl>

<dt>Type</dt>

<dd><span class="param-type">string</span></dd>

</dl>

#### <span class="type-signature"></span>pad<span class="signature">(n, len, char)</span> <span class="type-signature">→ {string}</span>

<div class="description">

Pad Numbers

</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`n`</td>

<td class="type"><span class="param-type">int</span></td>

<td class="description last">

数值

</td>

</tr>

<tr>

<td class="name">`len`</td>

<td class="type"><span class="param-type">int</span></td>

<td class="description last">

补位长度

</td>

</tr>

<tr>

<td class="name">`char`</td>

<td class="type"><span class="param-type">char</span></td>

<td class="description last">

补位字符，默认：0

</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 263](index.js.html#line263)

</dd>

</dl>

##### Returns:

<div class="param-desc">

IP地址，如1.2.3.4

</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">string</span></dd>

</dl>

#### <span class="type-signature"></span>randNumber<span class="signature">(m, n)</span> <span class="type-signature">→ {int}</span>

<div class="description">

随机数

</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`m`</td>

<td class="type"><span class="param-type">int</span></td>

<td class="description last">

m

</td>

</tr>

<tr>

<td class="name">`n`</td>

<td class="type"><span class="param-type">int</span></td>

<td class="description last">

n

</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 155](index.js.html#line155)

</dd>

</dl>

##### Returns:

<div class="param-desc">

生成 m 到 n 的随机整数

</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">int</span></dd>

</dl>

#### <span class="type-signature"></span>randNumberStr<span class="signature">(len)</span> <span class="type-signature">→ {string}</span>

<div class="description">

随机数字字符串

</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`len`</td>

<td class="type"><span class="param-type">int</span></td>

<td class="description last">

字符串长度

</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 140](index.js.html#line140)

</dd>

</dl>

##### Returns:

<div class="param-desc">

const { randNumberStr } = require('@dwing/common'); const str = randNumberStr(6); console.log(str);

</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">string</span></dd>

</dl>

#### <span class="type-signature"></span>randStr<span class="signature">(len)</span> <span class="type-signature">→ {string}</span>

<div class="description">

随机字符串

</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`len`</td>

<td class="type"><span class="param-type">int</span></td>

<td class="description last">

字符串长度

</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 127](index.js.html#line127)

</dd>

</dl>

##### Returns:

<dl>

<dt>Type</dt>

<dd><span class="param-type">string</span></dd>

</dl>

#### <span class="type-signature"></span>sha1<span class="signature">(str)</span> <span class="type-signature">→ {string}</span>

<div class="description">

SHA1

</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`str`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last"></td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 190](index.js.html#line190)

</dd>

</dl>

##### Returns:

<dl>

<dt>Type</dt>

<dd><span class="param-type">string</span></dd>

</dl>

#### <span class="type-signature"></span>sha256<span class="signature">(str)</span> <span class="type-signature">→ {string}</span>

<div class="description">

SHA256

</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`str`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last"></td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 201](index.js.html#line201)

</dd>

</dl>

##### Returns:

<dl>

<dt>Type</dt>

<dd><span class="param-type">string</span></dd>

</dl>

## License

MIT

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
