const path = require('path');

module.exports = {
    entry: './src/js/timer.js',
    output: {
        filename: 'timer.js',
        path: path.resolve(__dirname, 'dist/js')
    }
};
