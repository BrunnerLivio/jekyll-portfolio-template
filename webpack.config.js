const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/_js/app.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options: {
                presets: ['stage-3']
            }
        }],
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            })

        }]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};
