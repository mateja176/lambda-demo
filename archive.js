#!/bin/env node

const fs = require('fs');
const archiver = require('archiver');

const { name } = process.env;

if (!name) {
  throw new Error('Missing "name" environment variable.');
}

const dest = `${name}.zip`;

const outputStream = fs.createWriteStream(dest);

const archive = archiver('zip');

archive.pipe(outputStream);

archive.directory(process.env.directory, false);

archive.finalize().then(() => {
  console.log(dest);
});
