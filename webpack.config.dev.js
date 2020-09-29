const config = require('./webpack.config')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    ...config,
    mode: 'development',
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    devServer: {
        hot: true,
        hotOnly: false,
        contentBase: './dist/',
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'game.html',
            template: './public/game.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: "*/*", context: './public/'},
            ]
        }),
    ]
}