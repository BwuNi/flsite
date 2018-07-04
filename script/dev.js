const 
    exec = require('child_process').exec,
    spawn = require('child_process').spawn,
    path = require('path'),
    chalk = require('chalk') // 控制台 text 颜色


const 
    proj_path = path.resolve(__dirname, '../'),
    babel_watch = spawn(
        'cmd.exe',['/s', '/c',`"cd ${proj_path} && npm run build:watch"`], { cwd: null, env: null, windowsVerbatimArguments: true } 
    )

babel_watch.stdout.on('data', function (data) {
    console.log(chalk.yellow(`service: ${data.toString()}`))
});

babel_watch.stderr.on('data', (data) => {
  console.log(chalk.yellow(`service: ${data.toString()}`));
});

const 
    node_watch = spawn(
        'cmd.exe',['/s', '/c',`"cd ${proj_path} && npm run start:watch`], { cwd: null, env: null, windowsVerbatimArguments: true } 
    )

node_watch.stdout.on('data', function (buffer) {
    console.log(chalk.blue(`client: ${buffer.toString()}`))
});

node_watch.stderr.on('data', (data) => {
  console.log(chalk.blue(`client: ${data.toString()}`));
});

