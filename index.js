const pantsSources = [
  { src: 'pants_0.jpg' },
  { src: 'pants_1.png' },
  { src: 'pants_2.png' },
  { src: 'pants_3.mov', video: true },
]
const pantsFrameSize = { height: '453px', width: '604px' }
let pantsSourceIndex = 0

const showNextSource = (frame) => {
  pantsSourceIndex = (pantsSourceIndex + 1) % pantsSources.length
  const { src, video } = pantsSources[pantsSourceIndex]
  const elem = video ? 'video autoplay loop muted preload="auto"' : 'img'
  const childHtml = `<${elem} src="${src}"></${elem}>`
  console.log('childhtml', childHtml)
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
