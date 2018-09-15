#!/usr/bin/env node

const shell = require('shelljs')
const link = 'https://github.com/minatsuki-yui/pug-stylus.git'
shell.exec(`git clone ${link}`)
shell.exec(`cd pug-stylus;npm install --save-dev`)
console.log('\n\n')
console.log('To use:')
console.log('\n')
console.log('\tcd pug-stylus')
console.log('\tgulp')
console.log('\n')
console.log('success ✨✨')
