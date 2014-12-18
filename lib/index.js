// Dependencies
var CliUpdate = require("cli-update");

/**
 * CliFrames
 * Creates a new instance of CliFrames.
 *
 * @name CliFrames
 * @function
 * @param {Object} opt_options An optional object containing:
 *
 *  - `frames` (Array): The frames to be loaded.
 *  - `autostart` (Object): If provided, the animation will be autostarted.
 *     The object will be provided to `start` function.
 *
 * @return {CliFrames} The CliFrames instance.
 */
var CliFrames = module.exports = function (opt_options) {

    var self = this;
    opt_options = Object(opt_options);

    /**
     * load
     * Loads the animation frames.
     *
     * @name load
     * @function
     * @param {Object} options An array of strings representing the animation frames.
     * @return {CliFrames} The CliFrames instance.
     */
    self.load = function (options) {
        if (!Array.isArray(options)) { throw new Error("First argument must be an array of strings."); }
        self.frames = options;
        return self;
    };

    /**
     * start
     * Starts the CLI animation.
     *
     * @name start
     * @function
     * @param {Object} options An object containing the following fields:
     *
     *  - `delay` (Number): The frame delay in milliseconds (default: `100`).
     *  - `repeat` (Boolean): If `true`, the animation will be repeated infinitely.
     *
     * @return {CliFrames} The CliFrames instance.
     */
    self.start = function (options) {

        options = Object(options);
        options.delay = Number(options.delay || 100);
        options.end = options.end || function (err) {
            if (err) {
                console.log(err);
            }
        };

        process.stdout.write("\u001b[2J\u001b[0;0H");

        var cFrame = -1
          , frameCount = self.frames.length
          ;

        CliUpdate.render(self.frames[++cFrame % frameCount]);

        var repeat = Boolean(options.repeat)
          , animation = setInterval(function() {
                if (++cFrame >= frameCount && !repeat) {
                    clearInterval(animation);
                    options.end(null, self.frames);
                    return;
                }
                CliUpdate.render(self.frames[cFrame % frameCount]);
            }, options.delay)
          ;

        return CliFrames;
    };

    // Handle opt_options
    if (opt_options.frames) {
        self.load(opt_options.frames);
    }

    if (opt_options.autostart) {
        self.start(opt_options.autostart);
    }
};
