const $controllers = document.getElementById('controllers')
const $defaultController = document.getElementById('default-controller')
const $movieController = document.createElement('a-entity')

//Menu Animation
const $links = document.querySelector('#links')
const $gameLinks = document.getElementById('gamelinks')

$links.addEventListener('mouseenter', (event) => {
  const $target = event.target
  $target.setAttribute('scale', {x:1.5, y:1.5, z:1.5})
})

$links.addEventListener('mouseleave', (event) => {
  const $target = event.target
  $target.setAttribute('scale', {x:1, y:1, z:1})
})

$gameLinks.addEventListener('mouseenter', (event) => {
  const $target = event.target
  $target.setAttribute('scale', {x:1.5, y:1.5, z:1.5})
})

$gameLinks.addEventListener('mouseleave', (event) => {
  const $target = event.target
  $target.setAttribute('scale', {x:1, y:1, z:1})
})

//WELCOME MESSAGE AND OTHER TEXT FIELDS
const $welcome = document.getElementById('welcome')
$welcome.setAttribute('bmfont-text', 'text: Hi there. Welcome to WebVR!\n Please move cursor to choose; color: yellow')
$welcome.setAttribute('scale', {x:3, y:3, z:0})

//Menu Functions and behavior
const $gameWall = document.getElementById('gamewall')
const $gameWall2 = document.getElementById('gamewall2')
const $gameWall3 = document.getElementById('gamewall3')

function renderNewVideo(item) {
  const $defaultVideo = document.getElementById('default-video')
  $defaultVideo.setAttribute('src', `${item}`)
}

const $movieLink = document.querySelector('#movie-link')
const $gameLink = document.querySelector('#game-link')
const $menuLink = document.querySelector('#menu-link')

$movieLink.addEventListener('fusing', () => {
  window.setTimeout(buttonAction, 1000)
  function buttonAction() {
    renderNewVideo('#minion')
    $defaultController.setAttribute('visible', false)
    $movieController.setAttribute('visible', true)
    $movieController.setAttribute('video-controls', 'src: #minion')
    $welcome.setAttribute('visible', false)
    $gameWall.setAttribute('visible', false)
    $gameWall2.setAttribute('visible', false)
    $gameWall3.setAttribute('visible', false)
    $controllers.appendChild($movieController)
  }
})

$menuLink.addEventListener('fusing', () => {
  window.setTimeout(buttonAction, 1000)
  function buttonAction() {
    renderNewVideo('#yosemite')
    $movieController.setAttribute('visible', false)
    $defaultController.setAttribute('visible', true)
    $welcome.setAttribute('visible', true)
    $gameWall.setAttribute('visible', false)
    $gameWall2.setAttribute('visible', false)
    $gameWall3.setAttribute('visible', false)
  }
})

$gameLink.addEventListener('fusing', () => {
  window.setTimeout(buttonAction, 1000)
  function buttonAction() {
    renderNewVideo('#game-room')
    $movieController.setAttribute('visible', false)
    $defaultController.setAttribute('visible', false)
    $welcome.setAttribute('visible', false)
    $gameWall.setAttribute('visible', true)
    $gameWall2.setAttribute('visible', true)
    $gameWall3.setAttribute('visible', true)
  }
})
