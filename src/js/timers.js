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
            isStoped: false,
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

        /**
         |----------------
         | Private methods
         |----------------
         |
         */

         let self = this;

        // Build elements
        function builder() {

            // Time element
            let timeElement = document.querySelector(self.options.el);

            // Hour element
            let hourElement = document.createElement('span');
            hourElement.className = 'hour';
            self.hourElement = timeElement.appendChild(hourElement);

            // Minute element
            let minuteElement = document.createElement('span');
            minuteElement.className = 'minute';
            self.minuteElement = timeElement.appendChild(minuteElement);

            // Second element
            let secondElement = document.createElement('span');
            secondElement.className = 'second';
            self.secondElement = timeElement.appendChild(secondElement);

            // Initial time
            runner();

            // Invoke timer
            timer();
        }

        // Timer
        function timer() {
            setInterval( function() {

                if (!self.options.isStoped) {
                    self.options.time.second--;

                    if (self.options.time.hour == 0 && self.options.time.minute == 0 && self.options.time.second == -1) {
                        return self.stop();
                    }

                    if (self.options.time.second == -1) {
                        self.options.time.second = (self.options.time.minute == -1) ? 0 : 59;
                        self.options.time.minute--;

                        if (self.options.time.minute == -1) {
                            self.options.time.minute = (self.options.time.hour == -1) ? 0 : 59;
                            self.options.time.hour--;
                        }
                    }


                    // Runner
                    runner();
                }
            }, 1000);
        }

        // Runner
        function runner() {
            let second = self.options.time.second;
            let minute = self.options.time.minute;
            let hour = self.options.time.hour;

            // Formate and push to elements
            self.secondElement.innerHTML = (second <= 9) ? '0' + second : second;
            self.minuteElement.innerHTML = (minute <= 9) ? '0' + minute + ':' : minute + ':';
            self.hourElement.innerHTML = (hour <= 9) ? '0' + hour + ':' : hour + ':';
        }

        /**
         |---------------
         | Public methods
         |---------------
         |
         */

         // Get
         this.get = function(time) {
             return this.options.time[time];
         }

         // Set
         this.set = function(time, value) {
             this.options.time[time] = value;
             runner();
         }

        // Pause
        this.pause = function() {
            this.options.isStoped = true;
            runner();
        }

        // Stop
        this.stop = function() {
            this.options.time.second = 0;
            this.options.time.minute = 0;
            this.options.time.hour = 0;
            this.options.isStoped = true;
            runner();
        }

        // Resume
        this.resume = function() {
            this.options.isStoped = false;
            runner();
        }

        // Invoke
        builder();

    };
}());
