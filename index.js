// deps
var util = require('util');

// AsciiFrames constructor
var AsciiFrames = function (options) {

    var self = this;

    /*
     *  AsciiFrames#loadFrames (options)
     *
     *  This method loads the frames that must be animated.
     *  options -> an array of strings representing the frames of animation
     *          -> or an object
     *
     * */
    self.loadFrames = function (options) {

        // validate options
        if (!options) { throw new Error ("First argument must be an array or an object."); }

        // array
        if (options.constructor === Array) {

            // store array in frames
            self._frames = options;
        }

        // object
        if (options.constructor === Object) {
            throw new Error ("Not yet implemented");
        }
    };

    /*
     *  AsciiFrames#startAnimation (options)
     *
     *  Start the ASCII animation
     *  options -> an object containing the following fields
     *              * frameDelay: time in miliseconds
     *              * repeat:     boolean
     *
     * */
    self.startAnimation = function (options) {

        // validate options
        if (!options) { throw new Error ("First argument must be an object."); }

        // frameDelay was provided
        if (options.frameDelay !== undefined) {

            // convert it to number
            options.frameDelay = Number(options.frameDelay);

            // current frame index
            var cFrame = 0

                // how many frames?
              , frameCount = self._frames.length

                // repeat animation after end
              , repeat = Boolean(options.repeat)

                // start animation
              , animation = setInterval(function () {

                    // clear
                    util.print("\u001b[2J\u001b[0;0H");

                    // show current frame
                    console.log(self._frames[++cFrame % frameCount]);

                    // animation finished
                    if (cFrame > frameCount && !repeat) {

                        // clear the interval
                        clearInterval(animation);
                    }
                }, options.frameDelay);
            return;
        }
    }
};

module.exports = AsciiFrames;
