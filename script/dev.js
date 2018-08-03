const
    // exec = require('child_process').exec,
    spawn = require('child_process').spawn,
    path = require('path'),
    chalk = require('chalk') // 控制台 text 颜色


const
    projPath = path.resolve(__dirname, '../'),
    clientPath = path.resolve(__dirname, '../public'),
    babelWatch = spawn(
        'cmd.exe', ['/s', '/c', `"cd ${projPath} && npm run build:watch"`], { cwd: null, env: null, windowsVerbatimArguments: true }
    )


babelWatch.stdout.on('data', function(data) {
    console.log(chalk.blue(`typescript: ${data.toString()}`))
});

babelWatch.stderr.on('data', (data) => {
    console.log(chalk.blue(`typescript: ${data.toString()}`));
});

const
    nodeWatch = spawn(
        'cmd.exe', ['/s', '/c', `"cd ${projPath} && npm run start:watch`], { cwd: null, env: null, windowsVerbatimArguments: true }
    )

nodeWatch.stdout.on('data', function(data) {
    console.log(chalk.blue(`node: ${data.toString()}`))
});

nodeWatch.stderr.on('data', (data) => {
    console.log(chalk.blue(`node: ${data.toString()}`));
});

const
    webpackWatch = spawn(
        'cmd.exe', ['/s', '/c', `"cd ${clientPath} && npm run public`], { cwd: null, env: null, windowsVerbatimArguments: true }
    )

webpackWatch.stdout.on('data', function(data) {
    console.log(chalk.blue(`webpack: ${data.toString()}`))
});

webpackWatch.stderr.on('data', (data) => {
    console.log(chalk.blue(`webpack: ${data.toString()}`));
});