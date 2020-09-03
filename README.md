# Welcome to tri!

## A triangulated memory gallery.

Adding a new frame to the gallery is simple - check out `index.js`. It's as simple as submitting a pull request with a new frame object like the following:
```
const bolivia = {
  id: 'bolivia', // you can find your div.frame by this id for custom CSS (though none is currently used)
  sources: [
    { src: 'bolivia.gif' }, // these should point to files included in /photos
    { src: 'bolivia_1.png' },
    { src: 'bolivia_2.png' },
    // add as many images (or gifs) to a frame as you like! they will cycle through as you click.
  ],
  maxWidth: DEFAULT_LANDSCAPE_WIDTH // set according to orientation of the images
}
...
const frames = [ pants, ... bolivia ] // then add your new frame to the frames array!
```

*For best results, make sure all images within a frame have the same dimensions.*

**Tools**   (what I used to create the initial frames - but the sky's the limit!)
* SVGs by [Inkscape](https://inkscape.org/)
* triangulation by [Polyvia](https://github.com/Ovilia/Polyvia)
* gifs by [Giphy](https://giphy.com/create/gifmaker) (from screen-captured video and images animated in Mac's powerful built-in "Preview") 


### happy birthday d! <3

