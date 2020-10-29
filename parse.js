"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var ts = require("typescript");
var config = ts.parseJsonConfigFileContent(JSON.parse(fs.readFileSync('./tsconfig.json').toString()), ts.sys, '.');
console.error(config);
