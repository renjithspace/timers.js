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

        // Build elements
        function builder(element, time) {

            // Time element
            let timeElement = document.querySelector(element);

            // Hour element
            let hourElement = document.createElement('span');
            hourElement.className = 'hour';
            this.hourElement = timeElement.appendChild(hourElement);

            // Minute element
            let minuteElement = document.createElement('span');
            minuteElement.className = 'minute';
            this.minuteElement = timeElement.appendChild(minuteElement);

            // Second element
            let secondElement = document.createElement('span');
            secondElement.className = 'second';
            this.secondElement = timeElement.appendChild(secondElement);

            // Initial time
            runner('hour', time.hour);
            runner('minute', time.minute);
            runner('second', time.second);

            // Invoke timer
            timer(time.second, time.minute, time.hour);
        }

        // Timer
        function timer(second, minute, hour) {
            setInterval( function() {
                second++;

                if (second == 60) {
                    second = 0;
                    minute++;
                    if (minute == 60) {
                        minute = 0;
                        hour++;
                    }
                }

                // Runner
                runner('second', second);
                runner('minute', minute);
                runner('hour', hour);
            }, 1000);
        }

    };
}());
