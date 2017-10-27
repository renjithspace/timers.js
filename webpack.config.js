const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/js/timer.js',
    output: {
        filename: 'timer.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    plugins: [
        new UglifyJSPlugin()
    ]
};
