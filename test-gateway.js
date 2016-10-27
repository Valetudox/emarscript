#! /usr/bin/env node
const args = process.argv.slice(2);
const template = args[0];
const context = JSON.parse(args[1]);
const { compile } = require('./dist');

process.stdout.write(compile(template, context));
