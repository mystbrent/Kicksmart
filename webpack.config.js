const path = require('path');
const webpack = require('webpack');

const options = {
    cache: true, 

    entry: {
        core: path.join(__dirname, 'src/frontend/smart/index.jsx'),
    },

    output: {
        filename: 'bundle.js',
        path: path.join(process.cwd(), 'public/js'),
        publicPath: '/js'
    },


    module : {
        rules : [{
            test: /\.jsx?$/,
            exclude : /node_modules/,
            use : [{
                loader: "babel-loader",
            }],
            }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias : {
            "joi" : "joi-browser"
        },
        
    },
    plugins: [],
};

if (process.env.NODE_ENV === 'production') {
    options.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = options;