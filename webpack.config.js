var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
    entry: './app/entry.js',
    output: {
        filename: './app/bundle/bundle.js'
    },
    module: {
        loaders:[
            { test: /\.css/, loader: 'style-loader!css-loader?modules' }
        ]
    },
    plugins: [
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
