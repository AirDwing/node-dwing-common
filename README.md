# Dwing Common

[![npm](https://img.shields.io/npm/v/@dwing/common.svg?style=plastic)](https://npmjs.org/package/@dwing/common) [![npm](https://img.shields.io/npm/dt/@dwing/common.svg?style=plastic)](https://npmjs.org/package/@dwing/common)

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

## License

MIT

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)

### Methods

#### <span class="type-signature"></span>getDefer<span class="signature">()</span> <span class="type-signature">→ {Promise.defer}</span>

<div class="description">

getDefer

</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 56](index.js.html#line56)

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

#### <span class="type-signature"></span>getTimestamp<span class="signature">()</span> <span class="type-signature">→ {int}</span>

<div class="description">

获取UNIX标准时间戳

</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 9](index.js.html#line9)

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

*   [index.js](index.js.html), [line 108](index.js.html#line108)

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

*   [index.js](index.js.html), [line 95](index.js.html#line95)

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

*   [index.js](index.js.html), [line 22](index.js.html#line22)

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

*   [index.js](index.js.html), [line 70](index.js.html#line70)

</dd>

</dl>

##### Returns:

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

*   [index.js](index.js.html), [line 42](index.js.html#line42)

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

*   [index.js](index.js.html), [line 84](index.js.html#line84)

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

*   [index.js](index.js.html), [line 77](index.js.html#line77)

</dd>

</dl>

##### Returns:

<dl>

<dt>Type</dt>

<dd><span class="param-type">string</span></dd>

</dl>

#### <span class="type-signature"></span>uuid<span class="signature">()</span> <span class="type-signature">→ {string}</span>

<div class="description">

生成GUID

</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 15](index.js.html#line15)

</dd>

</dl>

##### Returns:

<div class="param-desc">

GUID

</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">string</span></dd>

</dl>

#### <span class="type-signature"></span>validPassword<span class="signature">(password)</span> <span class="type-signature">→ {boolean}</span>

<div class="description">

validPassword

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

<td class="name">`password`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">

输入密码

</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [index.js](index.js.html), [line 123](index.js.html#line123)

</dd>

</dl>

##### Returns:

<div class="param-desc">

isValid

</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">boolean</span></dd>

</dl>