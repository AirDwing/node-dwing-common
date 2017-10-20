const test = require('ava');
const { JSONparse, getTimestamp, formatDate, isNumberString, isEmpty, randStr, randNumberStr, randNumber, getDefer, md5, sha1, sha256, hmac, ip2int, int2ip, pad, getMobile, validPassword } = require('..');

test('JSONparse', (t) => {
  t.is(JSON.stringify(JSONparse('}}')), JSON.stringify({}));
  t.is(JSON.stringify(JSONparse('{"status":1}')), JSON.stringify({ status: 1 }));
});

test('getTimestamp', (t) => {
  t.is(typeof getTimestamp(), 'number');
});

test('formatDate', (t) => {
  const date = new Date();
  t.is(typeof formatDate(), 'string');
  t.is(
    formatDate('yyyy-MM-dd'),
    `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDate()}`
  );
  t.is(formatDate('yyyy-MM-dd', '2017-06-03'), '2017-06-03');
});

test('isNumberString', (t) => {
  t.is(isNumberString(null), false);
  t.is(isNumberString('123'), true);
});

test('isEmpty', (t) => {
  t.is(isEmpty({}), true);
  t.is(isEmpty(''), true);
  t.is(isEmpty(0), true);
  t.is(isEmpty(undefined), true);
  t.is(isEmpty(false), true);
  t.is(isEmpty(() => {}), false);
});

test('randStr', (t) => {
  t.is(typeof randStr(), 'string');
  t.is(randStr(5).length, 5);
});

test('randNumberStr', (t) => {
  t.is(typeof randNumberStr(), 'string');
  t.is(randNumberStr(5).length, 5);
});

test('randNumber', (t) => {
  t.is(randNumber(1, 5) < 6, true);
  t.is(randNumber(1), 1);
});

test('getDefer', (t) => {
  t.is(typeof getDefer(), 'object');
});

test('md5', (t) => {
  t.is(md5('1'), 'c4ca4238a0b923820dcc509a6f75849b');
});

test('sha1', (t) => {
  t.is(sha1('1'), '356a192b7913b04c54574d18c28d46e6395428ab');
});

test('sha256', (t) => {
  t.is(sha256('1'), '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b');
});

test('hmac', (t) => {
  t.is(hmac('1'), 'nq0XwTu1W/PiJ/j+Yl83j0JCEDg=');
});

test('ip2int', (t) => {
  t.is(ip2int('1.2.3.4'), 16909060);
  t.is(int2ip(16909060), '1.2.3.4');
});

test('pad', (t) => {
  t.is(pad(1, 10), '0000000001');
  t.is(pad(10, 1), '10');
});

test('getMobile', (t) => {
  t.is(getMobile('hello'), '');
  t.is(getMobile('+8613212341234'), '13212341234');
});

test('validPassword', (t) => {
  t.is(validPassword('abc'), false);
  t.is(validPassword('abc123abc123abc123abc123'), false);
  t.is(validPassword('scopre@456'), true);
  t.is(validPassword('aacopre@765a'), true);
  t.is(validPassword('7654321'), false);
});
