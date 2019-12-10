const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js/,
                include: path.resolve(__dirname, '../src'),
                use: ['eslint-loader']
            },
        ]
    },
    entry: path.join(__dirname, "../test/index.tsx"),
    output: {
        filename: 'js/[name].[hash].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../lib'),
        port: 9001,
        historyApiFallback: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../example/index.html"),
            filename: "index.html",
            inject: true,
            minify: {
                collapseWhitespace: true,
                preserveLineBreaks: true,
                minifyCSS: true,
                minifyJS: true,
                removeComments: true
            }
        }),
    ],
});
