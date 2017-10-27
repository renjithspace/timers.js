const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/js/timers.js',
    output: {
        filename: 'timers.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    plugins: [
        new UglifyJSPlugin()
    ]
};
