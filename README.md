
# cli-frames [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/cli-frames.svg)](https://www.npmjs.com/package/cli-frames) [![Downloads](https://img.shields.io/npm/dt/cli-frames.svg)](https://www.npmjs.com/package/cli-frames) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Create CLI animations using text frames.

[![cli-frames](http://i.imgur.com/RjY2kCn.gif)](#)

## :cloud: Installation

```sh
$ npm i --save cli-frames
```


## :clipboard: Example



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

## :memo: Documentation


### `CliFrames(opt_options)`
Creates a new instance of CliFrames.

#### Params
- **Object** `opt_options`: An optional object containing:
 - `frames` (Array): The frames to be loaded.
 - `autostart` (Object): If provided, the animation will be autostarted.
    The object will be provided to `start` function.

#### Return
- **CliFrames** The CliFrames instance.

### `load(options)`
Loads the animation frames.

#### Params
- **Object** `options`: An array of strings representing the animation frames.

#### Return
- **CliFrames** The CliFrames instance.

### `start(options)`
Starts the CLI animation.

#### Params
- **Object** `options`: An object containing the following fields:
 - `delay` (Number): The frame delay in milliseconds (default: `100`).
 - `repeat` (Boolean): If `true`, the animation will be repeated infinitely.

#### Return
- **CliFrames** The CliFrames instance.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`audrey-animation`](https://github.com/llucbrell/audrey-animation#readme) (by Lucas_C / llucbrell)—audrey scion for animations on the console
 - [`gif-cli`](https://github.com/IonicaBizau/gif-cli)—Gif animations in your terminal!
 - [`grumpycat`](https://npmjs.com/package/grumpycat) (by Ayhan Kuru)—grumpycat cli message
 - [`kamehameha.js`](https://github.com/StreetHub/kamehameha.js)—Bring legendary saiyans to your console.
 - [`text-animation`](https://github.com/IonicaBizau/text-animation)—Create beautiful ASCII text animations using NodeJS.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
