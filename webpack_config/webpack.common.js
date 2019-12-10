const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['@babel/polyfill', path.join(__dirname, "../src/index.tsx")],
    output: {
        path: path.join(__dirname, '../lib'),
        filename: "index.js",
        publicPath: "/",
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['thread-loader', 'style-loader', 'css-loader']
            },
            {
                test: /\.scss/,
                use: [ {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: process.env.NODE_ENV === 'development',
                        publicPath: "../"
                    }
                }, 'css-modules-typescript-loader', 'css-loader?modules', 'postcss-loader', 'sass-loader'],
                include: path.join(__dirname, '../src/')
            },
            {
                test: /\.ts(x)?/,
                use: ['thread-loader', 'babel-loader?cacheDirectory=true'],
                include: [
                    path.join(__dirname, '../src/'),
                    path.join(__dirname, '../test/')
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|bmp|eot|wof|woff2|ttf)/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: "imgs/[name].[contenthash:8].[ext]"
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "stylesheets/[name].css",
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js' ]
    },
};
