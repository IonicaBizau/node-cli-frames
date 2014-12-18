CLI Frames
==========
Create CLI animations using text frames.

## Installation

```sh
$ npm install cli-frames
```

## Example

```js
// Dependencies
var CliFrames = require("cli-frames");

// Frames
const frames = [
    "╔════╤╤╤╤════╗\n" +
    "║    │││ \\   ║\n" +
    "║    │││  O  ║\n" +
    "║    OOO     ║",

    "╔════╤╤╤╤════╗\n" +
    "║    ││││    ║\n" +
    "║    ││││    ║\n" +
    "║    OOOO    ║",

    "╔════╤╤╤╤════╗\n" +
    "║   / │││    ║\n" +
    "║  O  │││    ║\n" +
    "║     OOO    ║",

    "╔════╤╤╤╤════╗\n" +
    "║    ││││    ║\n" +
    "║    ││││    ║\n" +
    "║    OOOO    ║"
];

// Load frames when creating the instance
new CliFrames({
    frames: ["5", "4", "3", "2", "1"]
  , autostart: {
        delay: 1000
      , end: function (err, data) {
            // Create another animation
            var animation = new CliFrames();
            animation.load(frames);
            animation.start({
                repeat: true
              , delay: 250
            });
        }
    }
});
```

The result is:

![](http://i.imgur.com/RjY2kCn.gif)


## Documentation
## `new CliFrames(opt_options)`
Creates a new instance of CliFrames.

### Params
- **Object** `opt_options`: An optional object containing:
 - `frames` (Array): The frames to be loaded.
 - `autostart` (Object): If provided, the animation will be autostarted.
    The object will be provided to `start` function.

### Return
- **CliFrames** The CliFrames instance.

## `load(options)`
Loads the animation frames.

### Params
- **Object** `options`: An array of strings representing the animation frames.

### Return
- **CliFrames** The CliFrames instance.

## `start(options)`
Starts the CLI animation.

### Params
- **Object** `options`: An object containing the following fields:
 - `delay` (Number): The frame delay in milliseconds (default: `100`).
 - `repeat` (Boolean): If `true`, the animation will be repeated infinitely.

### Return
- **CliFrames** The CliFrames instance.

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

# Changelog
## `1.0.0`
 - Refactored the code.
 - Replaced `loadFrames` with load.
 - Replaced `startAnimation` with start.
 - Added the enchantment to pass options to constructor function.
 - Added `cli-update` as dependency. Fixes #3.
 - Renamed the package: `cli-frames` (the old name was `ascii-frames`).

## `v0.2.0`
 - Use `process.stdout` instead of `console.log`.

## `v0.1.2`
 - Fixed the condition for animation end when repeat is not true

## `v0.1.0`
 - Initial release

## License
See the [LICENSE](./LICENSE) file.
