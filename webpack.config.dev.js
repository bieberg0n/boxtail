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
        new CopyWebpackPlugin({
            patterns: [
                {from: "./game.html"}
            ]
        }),
        new htmlWebpackPlugin({
            filename: 'game.html',
            template: './game.html'
        }),
    ]
}