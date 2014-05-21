// AsciiFrames constructor
var AsciiFrames = function (options) {

    var self = this;

    /**
     * loadFrames
     *
     * This method loads the frames that must be animated.
     *
     * @param options: an array of strings representing the frames of animation
     * @return
     */
    self.loadFrames = function (options) {

        // validate options
        if (!options) { throw new Error ("First argument must be an array or an object."); }
        if (options.constructor === Array) {
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

        // frame delay
        options.frameDelay = Number(options.frameDelay);

        console.log("\u001b[2J\u001b[0;0H");
        var cFrame = 0
          , frameCount = self._frames.length
          , repeat = Boolean(options.repeat)
          , animation = setInterval(function () {

                // show current frame
                process.stdout.cursorTo(0, 0);
                process.stdout.write(self._frames[++cFrame % frameCount]);

                // animation finished
                if (cFrame >= frameCount && !repeat) {
                    clearInterval(animation);
                }

            }, options.frameDelay);
    }
};

module.exports = AsciiFrames;
