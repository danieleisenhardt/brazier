#!/usr/bin/env node

const path = require('path')

if (process.cwd().split(path.sep).pop() !== 'functions') {
    console.error('Please run this installer from the "functions" directory of your Firebase project');
    process.exit();
}

const fs = require("fs");

if( !fs.existsSync(process.cwd() + '/src/config') ) {
    fs.mkdirSync(process.cwd() + '/src/config');
}
fs.copyFileSync(__dirname + '/../template/config/app.ts.template', process.cwd() + '/src/config/app.ts');
fs.copyFileSync(__dirname + '/../template/config/route.ts.template', process.cwd() + '/src/config/route.ts');

if( !fs.existsSync(process.cwd() + '/src/command') ) {
    fs.mkdirSync(process.cwd() + '/src/command');
}
fs.copyFileSync(
    __dirname + '/../template/command/ExampleCommand.ts.template',
    process.cwd() + '/src/command/ExampleCommand.ts'
);

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
fs.copyFileSync(
    __dirname + '/../template/entity/Example.ts.template',
    process.cwd() + '/src/entity/Example.ts'
);

if( !fs.existsSync(process.cwd() + '/src/middleware') ) {
    fs.mkdirSync(process.cwd() + '/src/middleware');
}
fs.copyFileSync(
    __dirname + '/../template/middleware/ExampleMiddleware.ts.template',
    process.cwd() + '/src/middleware/ExampleMiddleware.ts'
);

if( !fs.existsSync(process.cwd() + '/src/repository') ) {
    fs.mkdirSync(process.cwd() + '/src/repository');
}
fs.copyFileSync(
    __dirname + '/../template/repository/ExampleRepository.ts.template',
    process.cwd() + '/src/repository/ExampleRepository.ts'
);

if( !fs.existsSync(process.cwd() + '/src/request') ) {
    fs.mkdirSync(process.cwd() + '/src/request');
}
fs.copyFileSync(
    __dirname + '/../template/request/CreateExampleRequest.ts.template',
    process.cwd() + '/src/request/CreateExampleRequest.ts'
);
fs.copyFileSync(
    __dirname + '/../template/request/ReadExampleRequest.ts.template',
    process.cwd() + '/src/request/ReadExampleRequest.ts'
);
fs.copyFileSync(
    __dirname + '/../template/request/UpdateExampleRequest.ts.template',
    process.cwd() + '/src/request/UpdateExampleRequest.ts'
);

if( !fs.existsSync(process.cwd() + '/src/transformer') ) {
    fs.mkdirSync(process.cwd() + '/src/transformer');
}
fs.copyFileSync(
    __dirname + '/../template/transformer/ExampleTransformer.ts.template',
    process.cwd() + '/src/transformer/ExampleTransformer.ts'
);

fs.copyFileSync(__dirname + '/../template/index.ts.template', process.cwd() + '/src/index.ts');
