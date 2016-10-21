'use strict';

const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // devtool: 'inline-source-map',
	
    module: {       
		preLoaders: [
            { exclude: /node_modules/, loader: 'tslint', test: /\.tsx?$/ }
        ],	
        loaders: [
            { exclude: /node_modules/, loader: 'ts', test: /\.tsx?$/ }
        ]
    },
	entry: {
        'index': ['./src/index.ts'],
        'index.min': ['./src/index.ts']
    },
	output: {
		filename: '[name].js',
		library: 'hostme-sdk-angular2-mobile',
		libraryTarget: 'umd'
    },
	plugins: [		
		new cleanWebpackPlugin(['dist', '*.js' ], {
                    root: path.resolve(__dirname, '..'),
                    verbose: true,
                    dry: false
                }),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
					include: /\.min\.js$/,
                    compress: {
                        warnings: false
                    }
                })
	],
    resolve: {
        extensions: ['', '.js', '.ts'],
        modulesDirectories: ['node_modules'],
        root: path.resolve(__dirname, '../src')
    },
    tslint: {
        emitErrors: true
    }
};