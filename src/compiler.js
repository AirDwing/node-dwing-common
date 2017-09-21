/* eslint-disable import/no-extraneous-dependencies */
const cheerio = require('cheerio');
const tmd = require('to-markdown');
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const $ = cheerio.load(readFileSync(path.join(__dirname, '../docs/global.html')));

const md = readFileSync(path.join(__dirname, '../.template.md')).toString().replace('<!-- CODE -->', tmd($('article').html()));

writeFileSync(path.join(__dirname, '../README.md'), md);
