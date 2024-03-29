const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/',
    },
    devServer: {
        port: 8080,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                auth: 'auth@http://localhost:8081/remoteEntry.js',
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
