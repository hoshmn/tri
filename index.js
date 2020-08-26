
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
  frameSize: { 'max-width': DEFAULT_LANDSCAPE_WIDTH }
}

const tree = {
  id: 'tree',
  sources: [
    // { src: 'tree_0.jpg' },
    { src: 'tree.gif' },
    { src: 'tree_1.png' },
    { src: 'tree_2.png' },
  ],
  // frameSize: { height: 1311, width: 983 }
  frameSize: { 'max-width': DEFAULT_PORTRAIT_WIDTH }
}

const frames = [ pants, tree ]


// __INTERNAL LOGIC_____

const frameMap = {} // populates dynamically, keep as empty obj

const showNextSource = (frame) => {
  const { id, sources } = frame
  const { src, video } = getNextSource(frame)

  const $frame = $(`#${id}.frame`)
  $frame.find('img').attr('src', src)

  // for video
  // const elem = video ? 'video autoplay loop muted preload="auto"' : 'img'
  // const childHtml = `<${elem} src="${src}"></${elem}>`
  // frame.html(childHtml)
}

const getNextSource = frame => {
  const { activeIdx, sources } = frame
  if (!Number.isInteger(activeIdx)) {
    frame.activeIdx = 0
  } else {
    frame.activeIdx = (activeIdx + 1) % sources.length
  }

  return sources[frame.activeIdx]
}

const initialize = () => {
  frames.forEach((frame) => {
    const { id, frameSize, sources } = frame
    frameMap[id] = frame // populate map, to retrieve proper frame on click

    const { src, video } = getNextSource(frame)
    const frameDiv = `
      <div data-id="${id}" id="${id}" class="frame">
        <img src="${src}" alt="${id}">
      </div>
    `
    
    $('.frames').append(frameDiv)

    const $frame = $(`#${id}.frame`)
    $frame.css(frameSize)
    // showNextSource(frame)
  })
}

initialize()

$('.frame').click(function() {
  const { id } = this.dataset
  const frame = frameMap[id]
  showNextSource(frame)
})

const tris = $('.triangle')

tris.hover(function() {
  $(this).addClass('touched')
})
