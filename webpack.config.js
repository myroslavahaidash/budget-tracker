const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack');

const paths = {
    DIST: path.resolve('dist'),
    APP: path.resolve('app')
};

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(paths.APP, 'index.html')
});

module.exports = {
    entry: {
        app: path.join(paths.APP, 'app.js')
    },
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                        ]
                }),
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin('style.bundle.css'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        port: 8080,
        hot: true
    }
};