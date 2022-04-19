#!/bin/env node

const stdin = process.openStdin();

let data = '';

stdin.on('data', (chunk) => {
  data += chunk;
});

stdin.on('end', () => {
  console.log(Buffer.from(data, 'base64').toString());
});
