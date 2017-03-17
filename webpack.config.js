'use strict';

const webpack = require('webpack');
const entry = {
    app: './app/app.js', // angularJS application entry point
    vendor: ['angular'] // application specific vendors
};
const config = {
    entry: entry,
    output: {
        path: './src/assets/javascripts/', // output folder for the bundles (it's actually inside folder that is watched by Jekyll)
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map'
    },
    devtool: "inline-source-map", // is used to create js maps
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader' // we use Babel in order to transpile sources (see .babelrc to check used environments)
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'}) // this plugin merge all vendors into the vendor bundle
    ]
};
module.exports = config;