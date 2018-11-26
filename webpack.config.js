var webpack = require('webpack');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin')
module.exports = {
    entry:'./a.js',
    output:{
        filename:'[name].js',
        chunkFilename: '[name].js',//设置按需加载后chunk的名字
        publicPath: 'dist/' // 设置基础路径
    },
    devServer: {
        hot: true,
        port: 9000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 热更新插件
        new openBrowserWebpackPlugin({
            url: 'http://localhost:9000'
        })
    ]
}
