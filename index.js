const pantsSources = [
  // { src: 'pants_0.jpg' },
  { src: 'pants_1.png' },
  { src: 'pants_2.png' },
  { src: 'pants_3.mov', video: true },
]
const pantsFrameSize = { height: '453px', width: '604px' }
let nextPantsIndex = 0

const showNextSource = (frame) => {
  const { src, video } = pantsSources[nextPantsIndex]
  nextPantsIndex = (nextPantsIndex + 1) % pantsSources.length
  const elem = video ? 'video autoplay loop muted preload="auto"' : 'img'
  const childHtml = `<${elem} src="${src}"></${elem}>`
  frame.html(childHtml)
}



$('.frame.pants').click(function() {
  showNextSource($(this))
})
$('.frame.pants').css(pantsFrameSize)

showNextSource($('.frame.pants'))
// $('img.trivg').mouseleave(function() {
//   $(this).attr('src', 'trivg.png')
// })






const tris = $('.triangle')

tris.hover(function() {
  $(this).addClass('touched')
})
