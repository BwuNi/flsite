const
    base = require('./base.conf'),
    merge = require('webpack-merge'),
    path = require('path'),
    utils = require('./utils')

module.exports = merge(base, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './dist/',
        filename: 'build.js',
        //异步加载的模块是要以文件形式加载，生成的文件名是以chunkFilename配置的
        chunkFilename: 'chunk[id].js?[chunkhash]',
    },
    module: {
        rules: utils.styleLoader()
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
})