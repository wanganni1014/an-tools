const merge = require('webpack-merge');
const common = require('./webpack.common');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, "../lib/*")]
        }),
        new OptimizeCssAssetsWebpackPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
        }),
        new HardSourceWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from:path.join(__dirname, '../src/index.d.ts'),
                to:path.join(__dirname, '../lib/')
            }
        ])
    ],
    optimization: {
        mergeDuplicateChunks: true,
        minimizer: [
            new TerserWebpackPlugin({
                parallel: true,
                cache: true
            }),
        ]
    },
    externals: [nodeExternals()],
});

