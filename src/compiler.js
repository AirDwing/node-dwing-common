const cheerio = require('cheerio');
const tmd = require('to-markdown');
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const $ = cheerio.load(readFileSync(path.join(__dirname, '../docs/global.html')));

const md = [
  readFileSync(path.join(__dirname, '../README.template.md')),
  tmd($('article').html())
].join('\n');

writeFileSync(path.join(__dirname, '../README.md'), md);
