const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, arg) => {
    const {mode} = arg

    const isDev = mode === 'development'
    let target = isDev ? "web" : 'browserslist';

    const plugins = [
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
        new HtmlWebpackPlugin({template: './public/index.html'}),
        new Dotenv()
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return {
        mode,
        target,
        plugins,
        devtool: 'source-map',
        entry: './src/index.js',
        devServer: {
            static: './build',
            hot: true,
            port: 3000,
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            assetModuleFilename: 'assets/[hash][ext][query]',
            clean: true,
        },
        module: {
            rules: [
                {test: /\.(html)$/, use: ['html-loader']},
                {
                    test: /\.(s[ac]|c)ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                    type: mode === 'production' ? 'asset' : 'asset/resource',
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                },
            ],
        },
    };
}
