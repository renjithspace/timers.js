(function() {

    this.Timer = function() {

        // Options
        this.options = {
            el: '.timer',
            time: {
                second: 0,
                minute: 0,
                hour: 0,
            },
        };

        // Extend defaul options
        if (arguments.length && typeof arguments[0] === 'object') {
            setOptions(this.options, arguments[0]);
        }

        // Set options
        function setOptions(options, args) {
            for (let arg in args) {
                if (options.hasOwnProperty(arg)) {
                    options[arg] = args[arg];
                }
            }
        }

    };
}());
