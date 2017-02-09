//Video and audio resource management
const resources = [
  { description: 'yosemite', src:'yosemite.mp4'},
  { description: 'minion', src: 'minion.mp4' },
  { description: 'click-sound', src: 'https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg' }
]
const $resources = function (resources) {
  for (let i = 0; i < length.resources; i ++) {
    var $item = document.getElementById(`${resources.description}`)
    $item.setAttribute('src', `${resources.src}`)
  }
}

var movieLink = document.querySelector('#movie-link')
var gameLink = document.querySelector('#game-link')
var menuLink = document.querySelector('#menu-link')
var play360 = document.querySelector('#play360')


//Main Menu Animation//
movieLink.addEventListener('mouseenter', function () {
  movieLink.setAttribute('scale', {x:1.5, y:1.5, z:1.5})
})
gameLink.addEventListener('mouseenter', function () {
  gameLink.setAttribute('scale', {x:1.5, y:1.5, z:1.5})
})
menuLink.addEventListener('mouseenter', function () {
  menuLink.setAttribute('scale', {x:1.5, y:1.5, z:1.5})
})
movieLink.addEventListener('mouseleave', function () {
  movieLink.setAttribute('scale', {x:1, y:1, z:1})
})
gameLink.addEventListener('mouseleave', function () {
  gameLink.setAttribute('scale', {x:1, y:1, z:1})
})
menuLink.addEventListener('mouseleave', function () {
  menuLink.setAttribute('scale', {x:1, y:1, z:1})
})


//Application/background Change
movieLink.addEventListener('fusing', function () {
  const $video = document.getElementById('play360')
  const $links = document.getElementById('links')
  $video.setAttribute('material', 'shader: flat; src: url(minion.mp4); stereoscopicType:RL')
  if ($links.className == 'front') {
    $links.setAttribute('class', 'back')
    $links.setAttribute('position', '-2 5 -8')
    $welcome.setAttribute('bmfont-text', 'opacity: 0')
  }
})
gameLink.addEventListener('fusing', function () {
  const $video = document.getElementById('play360')
  const $links = document.getElementById('links')
    $video.setAttribute('material', 'shader: flat; src: url(yosemite.mp4); stereoscopicType:RL')
    if ($links.className == 'front') {
      $links.setAttribute('class', 'back')
      $links.setAttribute('position', '-2 5 -8')
      $welcome.setAttribute('bmfont-text', 'opacity: 0')
    }
})
menuLink.addEventListener('fusing', function () {
  const $video = document.getElementById('play360')
  const $links = document.getElementById('links')
    $video.setAttribute('material', 'shader: flat; src: url(yosemite.mp4); stereoscopicType:RL')
    $links.setAttribute('position', '-2 2.4 -5')
    $links.setAttribute('class', 'front')
    $welcome.setAttribute('bmfont-text', 'opacity: 1.0')
})


//THIS IS FOR ALL TEXT FIELDS
var $welcome = document.getElementById('welcome')
$welcome.setAttribute('bmfont-text', 'text: Hi there. Welcome to WebVR!\n Please move cursor to choose; color: yellow')
$welcome.setAttribute('scale', {x:3, y:3, z:0})
