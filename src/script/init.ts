#!/usr/bin/env node

if (process.cwd().split('/').pop() !== 'functions') {
    console.error('Please run this installer from the "functions" directory of your Firebase project');
    process.exit();
}

const fs = require("fs");

if( !fs.existsSync(process.cwd() + '/src/config') ) {
    fs.mkdirSync(process.cwd() + '/src/config');
}

// fs.copyFileSync(__dirname + '/../template/config/app.ts.template', process.cwd() + '/src/config/app.ts');
fs.copyFileSync(__dirname + '/../template/config/route.ts.template', process.cwd() + '/src/config/route.ts');

if( !fs.existsSync(process.cwd() + '/src/controller') ) {
    fs.mkdirSync(process.cwd() + '/src/controller');
}

fs.copyFileSync(
    __dirname + '/../template/controller/ExampleController.ts.template',
    process.cwd() + '/src/controller/ExampleController.ts'
);

if( !fs.existsSync(process.cwd() + '/src/entity') ) {
    fs.mkdirSync(process.cwd() + '/src/entity');
}

//TODO

if( !fs.existsSync(process.cwd() + '/src/middleware') ) {
    fs.mkdirSync(process.cwd() + '/src/middleware');
}

fs.copyFileSync(
    __dirname + '/../template/middleware/ExampleMiddleware.ts.template',
    process.cwd() + '/src/middleware/ExampleMiddleware.ts'
);
fs.copyFileSync(
    __dirname + '/../template/middleware/ExampleMiddleware2.ts.template',
    process.cwd() + '/src/middleware/ExampleMiddleware2.ts'
);
fs.copyFileSync(
    __dirname + '/../template/middleware/ExampleMiddleware3.ts.template',
    process.cwd() + '/src/middleware/ExampleMiddleware3.ts'
);

if( !fs.existsSync(process.cwd() + '/src/request') ) {
    fs.mkdirSync(process.cwd() + '/src/request');
}

//TODO

if( !fs.existsSync(process.cwd() + '/src/transformer') ) {
    fs.mkdirSync(process.cwd() + '/src/transformer');
}

//TODO

fs.copyFileSync(__dirname + '/../template/index.ts.template', process.cwd() + '/src/index.ts');

// console.log(__dirname);
// console.log(process.cwd());

