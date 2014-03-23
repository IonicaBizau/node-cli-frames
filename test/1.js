// frames
var frames = [
        "╔════╤╤╤╤════╗\n" +
        "║    │││ \   ║\n" +
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
