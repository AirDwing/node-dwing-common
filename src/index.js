const { isObject, isString, isNumber, isBoolean } = require('util');
const crypto = require('crypto');
const uuid = require('uuid');

/**
 * 获取UNIX标准时间戳
 * @return {int} UNIX标准时间戳
 */
exports.getTimestamp = () => parseInt(new Date().getTime() / 1000, 10);

/**
 * 格式化时间
 * @param {string} inputPattern 时间格式,默认为'yyyy-MM-dd hh:mm:ss'
 * @param {any} inputDate 输入时间,默认为当前
 * @return {string} 格式化的时间
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
 */
exports.uuid = () => uuid.v4();

const numberReg = /^((-?\d*\.?\d*(?:e[+-]?\d*(?:\d?\.?|\.?\d?)\d*)?)|(0[0-7]+)|(0x[0-9a-f]+))$/i;

/**
 * 判断是否为数字字符串
 * @param {*} obj 任意
 * @return {boolean} 是否为数字字符串
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

/**
 * 随机字符串
 * @param  {int} len 字符串长度
 * @return {string}
 */
exports.randStr = (len) => {
  const x = 'abcdefhijkmnprstwxyz2345678';
  const maxPos = x.length;
  let pwd = '';
  for (let i = 0; i < len; i += 1) {
    pwd += x.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};

/**
 * 随机数字字符串
 * @param  {int} len 字符串长度
 * @return {string}
 */
exports.randNumberStr = (len) => {
  const x = '0123456789';
  const maxPos = x.length;
  let pwd = '';
  for (let i = 0; i < len; i += 1) {
    pwd += x.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};

/**
 * 随机数
 * @param {int} m m
 * @param {int} n n
 * @return {int}  生成 m 到 n 的随机整数
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
 */
exports.md5 = str => crypto.createHash('md5').update(`${str}`).digest('hex');

/**
 * SHA1
 * @param  {string} str
 * @return {string}
 */
exports.sha1 = str => crypto.createHash('sha1').update(`${str}`).digest('hex');

/**
 * SHA256
 * @param  {string} str
 * @return {string}
 */
exports.sha256 = str => crypto.createHash('sha256').update(`${str}`).digest('hex');

/**
 * Hmac
 * @param  {string} str 待加密字符串
 * @param  {string} type sha1或sha256
 * @param  {string} key 密钥
 * @return {string}
 */
exports.hmac = (str, type = 'sha1', key = '') => crypto.createHmac(type, key).update(new Buffer(str, 'utf8')).digest('base64');

/**
 * IP2INT
 * @param {str} ip IP地址，如1.2.3.4
 * @returns {number} IP数值
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

/**
 * validPassword
 * @param  {string} password  输入密码
 * @return {boolean}          isValid
 */
exports.validPassword = (password) => {
  if (password.length < 6 || password.length > 18) {
    return false;
  }
  /*
   * 允许包含大小写、数字、空格、点、下划线、短横线、波浪线、问号、感叹号
   */
  // const regx = /^[A-Za-z0-9.-_~!? ]*$/;
  // if (!regx.test(password)) {
  //   return false;
  // }
  /*
   * 如 aaaaaa
   * 如 1234567 abcdef
   * 如 7654321 fedcba
   */
  const n = [1, 1, 1];
  for (let l = 1; l < password.length; l += 1) {
    if (password.charAt(l - 1) === password.charAt(l)) {
      n[0] += 1;
    }
    if (password.charAt(l - 1).charCodeAt(0) + 1 === password.charAt(l).charCodeAt(0)) {
      n[1] += 1;
    }
    if (password.charAt(l - 1).charCodeAt(0) - 1 === password.charAt(l).charCodeAt(0)) {
      n[2] += 1;
    }
    if (n[0] > 4 || n[1] > 4 || n[2] > 4) {
      return false;
    }
  }
  return true;
};
