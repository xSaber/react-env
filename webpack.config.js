const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    // Can be ceparated to .babelrc file
                    presets : ['react', 'es2015', 'stage-0']
                }
            }
        }]
    },
    plugins: [HtmlWebpackPluginConfig]
}
