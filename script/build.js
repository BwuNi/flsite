const
    spawn = require('child_process').spawn,
    path = require('path'),
    chalk = require('chalk') // 控制台 text 颜色

let isWatch = ''

process.argv.forEach(function(val, index, array) {
    console.log(val)
    if(val === '--watch' || val === '-w') isWatch ='--watch'
});



const
    projPath = path.resolve(__dirname, '../core'),
    tscWatch = spawn(
        'cmd.exe', ['/s', '/c', `"cd ${projPath} && tsc ${isWatch}"`], { cwd: null, env: null, windowsVerbatimArguments: true }
    )


    console.log(`"cd ${projPath} && tsc ${isWatch}"`)
tscWatch.stdout.on('data', function(data) {
    console.log(chalk.yellow(`tsc: ${data.toString()}`))
});

tscWatch.stderr.on('data', (data) => {
    console.log(chalk.red(`tsc: ${data.toString()}`));
});