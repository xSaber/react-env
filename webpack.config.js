const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
});

var devtool = isProduction ? 'source-map' : 'eval-source-map';

module.exports = {
    devtool: devtool,
    entry: './app',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        alias: {},
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
}
