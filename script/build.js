const
    spawn = require('child_process').spawn,
    path = require('path'),
    chalk = require('chalk') // 控制台 text 颜色

let isWatch = ''

process.argv.forEach(function(val, index, array) {
    console.log(val)
    if (val === '--watch' || val === '-w') isWatch = '--watch'
});


const
    projPath = path.resolve(__dirname, '../core'),
    tscWatch = spawn(
        'cmd.exe', ['/s', '/c', `"cd ${projPath} && tsc ${isWatch}"`], { cwd: null, env: null, windowsVerbatimArguments: true }
    )


console.log(`"cd ${projPath} && tsc ${isWatch}"`)

tscWatch.stdout.on('data', function(data) {
    console.log(chalk.green(`tsc: ${data.toString()}`))
});

tscWatch.stderr.on('data', (data) => {
    console.log(chalk.red(`tsc: ${data.toString()}`));
});


const
    pubPath = path.resolve(__dirname, '../public'),
    pubWatch = spawn(
        'cmd.exe', ['/s', '/c', `"cd ${pubPath} && npm run build"`], { cwd: null, env: null, windowsVerbatimArguments: true }
    )


console.log(`"cd ${pubPath} && npm run build"`)

pubWatch.stdout.on('data', function(data) {
    console.log(chalk.blue(`tsc: ${data.toString()}`))
});

pubWatch.stderr.on('data', (data) => {
    console.log( chalk.red(`tsc: ${data.toString()}`));
});