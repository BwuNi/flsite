const 
    path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    assetsPath = (_path) => ('./static'+_path)

    
module.exports = {
    entry:{
        'main':path.resolve(__dirname, '../src/main.js'),
        'install':path.resolve(__dirname, '../worker/install.js'),
        'sw':path.resolve(__dirname, '../worker/sw.js')
    },
    output:{
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        //异步加载的模块是要以文件形式加载，生成的文件名是以chunkFilename配置的
        chunkFilename: 'chunk[id].js?[chunkhash]',
    },
    resolve: {
        //modules:[path.resolve(__dirname,'../node_modules')],
        //mainFields:['jsnext:main','main'],
        alias: { // 路径重命名
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src')
        },
        extensions: ['.js', '.json', '.vue', '.scss', '.css'] // 省略后缀名
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 64,
                    name: assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 64,
                    name: assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff|svg|eot|ttf)$/,
                loader: 'url-loader?limit=64',
                options: {
                    //name: '[name].[ext]?[hash]'
                    limit: 64,
                    name: assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    
    devtool: '#source-map',
    plugins: [
        // new HtmlWebpackPlugin()
    ]
}
