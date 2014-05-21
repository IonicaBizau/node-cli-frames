ASCII Frames
============

Create ASCII animations in Terminal using ASCII frames.

## Methods

### `loadFrames (options)`

 The `options` parameter is an **array** of strings representing the frames.

 In the future it will can be an **object**.

### `startAnimation (options)`

 The `options` parameter is an **object** containing the following fields:
   - `frameDelay`: (number) the delay in miliseconds
   - `repeat`: (boolean) repeat animation after end

## Example

```js
// frames
var frames = [
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
    ]

    // require the library
  , AsciiFrames = require("../index")

    // create a new instance
  , animation = new AsciiFrames ();

// load frames
animation.loadFrames(frames);

// and start animation
animation.startAnimation({

    // repeat
    repeat: true

    // 250 ms
  , frameDelay: 250
});
```

## How to test

```sh
$ npm install ascii-frames
$ cd node_modules
$ npm test
```

## Changelog

### v0.2.0
 - Use `process.stdout` instead of `console.log`.

### v0.1.2
 - Fixed the condition for animation end when repeat is not `true`

### v0.1.0
 - Initial release

## License
See the LICENSE file.
