const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry:  './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {from: "./game.html"}
            ]
        })
    ]
}