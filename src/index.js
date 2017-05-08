const { isObject, isString, isNumber, isBoolean } = require('util');
const crypto = require('crypto');
const uuid = require('uuid');

/**
 * 获取UNIX标准时间戳
 * @return {int} UNIX标准时间戳
 */
exports.getTimestamp = () => parseInt(new Date().getTime() / 1000, 10);

/**
 * 生成GUID
 * @return {string} GUID
 */
exports.uuid = () => uuid.v4();

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
  for (let i = 0; i < len; i++) {
    pwd += x.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};

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
exports.md5 = (str) => crypto.createHash('md5').update(`${str}`).digest('hex');

/**
 * SHA1
 * @param  {string} str
 * @return {string}
 */
exports.sha1 = (str) => crypto.createHash('sha1').update(`${str}`).digest('hex');

/**
 * SHA1
 * @param  {string} str
 * @return {string}
 */
exports.sha1 = (str) => {
  const instance = crypto.createHash('sha1');
  instance.update(`${str}`);
  return instance.digest('hex');
};

/**
 * IP2INT
 * @param {str} ip IP地址，如1.2.3.4
 * @returns {number} IP数值
 */
exports.ip2int = (ips) => {
  let num;
  const ip = ips.split('.');
  num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3]);
  num = num >>> 0;
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
  for (let l = 1; l < password.length; l++) {
    if (password.charAt(l - 1) === password.charAt(l)) {
      n[0]++;
    }
    if (password.charAt(l - 1).charCodeAt(0) + 1 === password.charAt(l).charCodeAt(0)) {
      n[1]++;
    }
    if (password.charAt(l - 1).charCodeAt(0) - 1 === password.charAt(l).charCodeAt(0)) {
      n[2]++;
    }
    if (n[0] > 4 || n[1] > 4 || n[2] > 4) {
      return false;
    }
  }
  return true;
};
