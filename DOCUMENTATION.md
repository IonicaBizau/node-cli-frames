## Documentation

You can see below the API reference of this module.

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

