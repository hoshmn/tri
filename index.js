
const DEFAULT_LANDSCAPE_WIDTH = 900
const DEFAULT_PORTRAIT_WIDTH = 675

// __CONTENT_____

// to add a new "frame", simply define a frame obj like the following and add it to the frames array:
const pants = {
  id: 'pants',
  sources: [ // as many as you'd like! just make sure to upload an image/gif file with a matching name
    // { src: 'pants_0.jpg' },
    { src: 'pants.gif' },
    { src: 'pants_1.png' },
    { src: 'pants_2.png' },
  ],
  maxWidth: DEFAULT_LANDSCAPE_WIDTH
}

const tree = {
  id: 'tree',
  sources: [
    // { src: 'tree_0.jpg' },
    { src: 'tree.gif' },
    { src: 'tree_1.png' },
    { src: 'tree_2.png' },
  ],
  maxWidth: DEFAULT_PORTRAIT_WIDTH
}

const grass = {
  id: 'grass',
  sources: [
    { src: 'grass.gif' },
    { src: 'grass.jpg' },
  ],
  maxWidth: DEFAULT_LANDSCAPE_WIDTH
}

const cigs = {
  id: 'cigs',
  sources: [
    { src: 'cigs.gif' },
    { src: 'cigs_1.jpg' },
    { src: 'cigs1b.jpg' },
    { src: 'cigs1c.jpg' },
    { src: 'cigs1d.jpg' },
    { src: 'cigs1e.jpg' },
    { src: 'cigs1b.jpg' },
    { src: 'cigs1c.jpg' },
    { src: 'cigs1d.jpg' },
    { src: 'cigs1e.jpg' },
    { src: 'cigs_2.jpg' },
  ],
  maxWidth: DEFAULT_PORTRAIT_WIDTH
}

const snowy = {
  id: 'snowy',
  sources: [
    { src: 'snowy.gif' },
    { src: 'snowy_b&w.jpg' },
    { src: 'snowy_w&b.jpg' },
  ],
  maxWidth: DEFAULT_LANDSCAPE_WIDTH
}

const totem = {
  id: 'totem',
  sources: [
    { src: 'totem.gif'},
    { src: 'totem_1.jpg' },
    { src: 'totem_2.jpg' },
    { src: 'totem_3.jpg' },
    { src: 'totem_4.jpg' },
  ],
  maxWidth: DEFAULT_PORTRAIT_WIDTH
}

const frames = [ pants, tree, grass, cigs, snowy, totem ]


// __INTERNAL LOGIC_____

const frameMap = {} // populates dynamically, keep as empty obj

const showNextSource = (frame) => {
  const { id } = frame
  const { src, video } = getNextSource(frame)
  
  const $frame = $(`#${id}.frame`)
  $frame.find('img').attr('src', `photos/${src}`)
}

const getNextSource = frame => {
  const { activeIdx, sources } = frame

  if (!Number.isInteger(activeIdx)) {
    frame.activeIdx = 0 // initialize idx
  } else {
    frame.activeIdx = (activeIdx + 1) % sources.length
  }

  return sources[frame.activeIdx]
}

const initialize = () => {
  frames.forEach((frame) => {
    const { id, maxWidth } = frame
    frameMap[id] = frame // populate map, to retrieve proper frame on click

    const { src } = getNextSource(frame)
    const frameDiv = `
      <div data-id="${id}" id="${id}" class="frame" style="max-width: ${maxWidth}px;">
        <img src="photos/${src}" alt="${id}">
      </div>
    `

    $('.frames').append(frameDiv)

    // const $frame = $(`#${id}.frame`)
    // $frame.css(frameSize)
    // showNextSource(frame)
  })
}

initialize()

$('.frame').click(function() {
  const { id } = this.dataset
  const frame = frameMap[id]
  showNextSource(frame)
})

$('.triangle').click(function() {
  $(this).addClass('touched')
})

$('.curtain').click(function() {
  $(this).addClass('touched')
  // $('.tri-fly').addClass('touched')
})

// $('.tri-fly').hover(function() {
//   $(this).addClass('touched')
// })
