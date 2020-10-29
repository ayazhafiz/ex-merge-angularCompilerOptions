import * as fs from 'fs';
import * as ts from 'typescript';

const config = ts.parseJsonConfigFileContent(
    JSON.parse(fs.readFileSync('./tsconfig.json').toString()), ts.sys, '.');
console.error(config);
