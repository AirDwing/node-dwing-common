const { isObject, isString, isNumber, isBoolean } = require('util');
const crypto = require('crypto');
const uuidLib = require('uuid');

/**
 * 获取UNIX标准时间戳
 * @return {int} UNIX标准时间戳
 * @playground
 * const { getTimestamp } = require('@dwing/common');
 * const timestamp = getTimestamp();
 * console.log(timestamp);
 */
exports.getTimestamp = () => parseInt(new Date().getTime() / 1000, 10);

/**
 * 格式化时间
 * @param {string} inputPattern 时间格式,默认为'yyyy-MM-dd hh:mm:ss'
 * @param {any} inputDate 输入时间,默认为当前
 * @return {string} 格式化的时间
 * @playground
 * const { formatDate } = require('@dwing/common');
 * const date = formatDate();
 * console.log(date);
 */
exports.formatDate = (inputPattern, inputDate) => {
  const date = new Date(inputDate).toString() === 'Invalid Date' ? new Date() : new Date(inputDate);
  let pattern = inputPattern || 'yyyy-MM-dd hh:mm:ss';
  const y = date.getFullYear().toString();
  const o = {
    M: date.getMonth() + 1, // month
    d: date.getDate(), // day
    h: date.getHours(), // hour
    m: date.getMinutes(), // minute
    s: date.getSeconds() // second
  };
  pattern = pattern.replace(/(y+)/ig, (a, b) => y.substr(4 - Math.min(4, b.length)));
  /* eslint no-restricted-syntax:0,guard-for-in:0 */
  for (const i in o) {
    pattern = pattern.replace(new RegExp(`(${i}+)`, 'g'), (a, b) => ((o[i] < 10 && b.length > 1) ? `0${o[i]}` : o[i]));
  }
  return pattern;
};

/**
 * 生成GUID
 * @return {string} GUID
 * @playground
 * const { uuid } = require('@dwing/common');
 * const id = uuid();
 * console.log(id);
 */
exports.uuid = uuidLib.v4;

const numberReg = /^((-?\d*\.?\d*(?:e[+-]?\d*(?:\d?\.?|\.?\d?)\d*)?)|(0[0-7]+)|(0x[0-9a-f]+))$/i;

/**
 * 判断是否为数字字符串
 * @param {*} obj 任意
 * @return {boolean} 是否为数字字符串
 * @playground
 * const { isNumberString } = require('@dwing/common');
 * const check = isNumberString('123');
 * console.log(check);
 */
exports.isNumberString = (obj) => {
  if (!obj) {
    return false;
  }
  return numberReg.test(obj);
};

/**
 * 判断是否为数字
 * @param {*} obj 任意
 * @return {boolean} 是否为数字
 */
exports.isNumber = isNumber;

/**
 * 判断是否为对象
 * @param {*} obj 任意
 * @return {boolean} 是否为对象
 */
exports.isObject = isObject;

/**
 * 判断是否为空
 * @param  {*} obj 任意
 * @return {boolean} 真为空，假为非空
 * @playground
 * const { isEmpty } = require('@dwing/common');
 * const check = isEmpty('123');
 * console.log(check);
 */
exports.isEmpty = (obj) => {
  if (isObject(obj)) {
    return Object.keys(obj).length === 0 && (obj.length === undefined || obj.length === 0);
  } else if (isString(obj)) {
    return obj.length === 0;
  } else if (isNumber(obj)) {
    return obj === 0;
  } else if (obj === null || obj === undefined) {
    return true;
  } else if (isBoolean(obj)) {
    return !obj;
  }
  return false;
};

const randStr = (x, len) => {
  const maxPos = x.length;
  let pwd = '';
  for (let i = 0; i < len; i += 1) {
    pwd += x.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};
/**
 * 随机字符串
 * @param  {int} len 字符串长度
 * @return {string}
 * @playground
 * const { randStr } = require('@dwing/common');
 * const str = randStr(6);
 * console.log(str);
 */
exports.randStr = (len) => {
  const x = 'abcdefhijkmnprstwxyz2345678';
  return randStr(x, len);
};

/**
 * 随机数字字符串
 * @param  {int} len 字符串长度
 * @return {string}
 * const { randNumberStr } = require('@dwing/common');
 * const str = randNumberStr(6);
 * console.log(str);
 */
exports.randNumberStr = (len) => {
  const x = '0123456789';
  return randStr(x, len);
};

/**
 * 随机数
 * @param {int} m m
 * @param {int} n n
 * @return {int}  生成 m 到 n 的随机整数
 * @playground
 * const { randNumber } = require('@dwing/common');
 * const result = randNumber(1, 6);
 * console.log(result);
 */
exports.randNumber = (m, n = m) => parseInt(Math.random() * (n - m) + m, 10);

/**
 * getDefer
 * @return {Promise.defer} defer对象
 */
exports.getDefer = () => {
  const deferred = {};
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
};

/**
 * MD5
 * @param  {string} str
 * @return {string}
 * @playground
 * const { md5 } = require('@dwing/common');
 * const result = md5('1');
 * console.log(result);
 */
exports.md5 = str => crypto.createHash('md5').update(`${str}`).digest('hex');

/**
 * SHA1
 * @param  {string} str
 * @return {string}
 * @playground
 * const { sha1 } = require('@dwing/common');
 * const result = sha1('1');
 * console.log(result);
 */
exports.sha1 = str => crypto.createHash('sha1').update(`${str}`).digest('hex');

/**
 * SHA256
 * @param  {string} str
 * @return {string}
 * @playground
 * const { sha256 } = require('@dwing/common');
 * const result = sha256('1');
 * console.log(result);
 */
exports.sha256 = str => crypto.createHash('sha256').update(`${str}`).digest('hex');

/**
 * Hmac
 * @param  {string} str 待加密字符串
 * @param  {string} type sha1或sha256
 * @param  {string} key 密钥
 * @return {string}
 * @playground
 * const { sha256 } = require('@dwing/common');
 * const result = sha256('1');
 * console.log(result);
 */
exports.hmac = (str, type = 'sha1', key = '') => crypto.createHmac(type, key).update(new Buffer(str, 'utf8')).digest('base64');

/**
 * IP2INT
 * @param {str} ip IP地址，如1.2.3.4
 * @returns {number} IP数值
 * @playground
 * const { ip2int } = require('@dwing/common');
 * const result = ip2int('1.2.3.4');
 * console.log(result);
 */
exports.ip2int = (ips) => {
  let num;
  const ip = ips.split('.');
  num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3]);
  num >>>= 0;
  return num;
};

/**
 * INT2IP
 * @param {int} num IP数值
 * @returns {string} IP地址，如1.2.3.4
 * @playground
 * const { int2ip } = require('@dwing/common');
 * const result = int2ip(16909060);
 * console.log(result);
 */
exports.int2ip = (num) => {
  const tt = new Array(4);
  tt[0] = (num >>> 24) >>> 0;
  tt[1] = ((num << 8) >>> 24) >>> 0;
  tt[2] = (num << 16) >>> 24;
  tt[3] = (num << 24) >>> 24;
  const str = `${String(tt[0])}.${String(tt[1])}.${String(tt[2])}.${String(tt[3])}`;
  return str;
};

/**
 * Pad Numbers
 * @param {int} n 数值
 * @param {int} len 补位长度
 * @param {char} char 补位字符，默认：0
 * @returns {string} IP地址，如1.2.3.4
 * @playground
 * const { pad } = require('@dwing/common');
 * const result = pad(123, 10);
 * console.log(result);
 */
exports.pad = (n, len, char = '0') => {
  const str = `${n}`;
  return str.length >= len ? str : new Array(len - str.length + 1).join(char) + n;
};

/**
 * 获取手机号码
 * @param {string} mobile 手机号字符串
 * @return {string} 非手机号返回空字符串,否则返回去掉+86的手机号码
 */
exports.getMobile = (mobile) => {
  if (typeof mobile !== 'string' || !/^\+?\d*$/.test(mobile)) {
    return '';
  }
  return mobile.replace(/^\+?86(\d*)/, '$1');
};

// /**
//  * validPassword
//  * @param  {string} password  输入密码
//  * @return {boolean}          isValid
//  */
// exports.validPassword = (password) => {
//   if (password.length < 6 || password.length > 18) {
//     return false;
//   }
//   /*
//    * 允许包含大小写、数字、空格、点、下划线、短横线、波浪线、问号、感叹号
//    */
//   // const regx = /^[A-Za-z0-9.-_~!? ]*$/;
//   // if (!regx.test(password)) {
//   //   return false;
//   // }
//   /*
//    * 如 aaaaaa
//    * 如 1234567 abcdef
//    * 如 7654321 fedcba
//    */
//   const n = [1, 1, 1];
//   for (let l = 1; l < password.length; l += 1) {
//     if (password.charAt(l - 1) === password.charAt(l)) {
//       n[0] += 1;
//     }
//     if (password.charAt(l - 1).charCodeAt(0) + 1 === password.charAt(l).charCodeAt(0)) {
//       n[1] += 1;
//     }
//     if (password.charAt(l - 1).charCodeAt(0) - 1 === password.charAt(l).charCodeAt(0)) {
//       n[2] += 1;
//     }
//     if (n[0] > 4 || n[1] > 4 || n[2] > 4) {
//       return false;
//     }
//   }
//   return true;
// };
