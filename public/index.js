const $videoentity = document.getElementById('videoentity')
const $defaultVideo = document.getElementById('default-video')


//Main Menu Animation//
const $links = document.getElementById('links')
const $movieLink = document.querySelector('#movie-link')
const $gameLink = document.querySelector('#game-link')
const $menuLink = document.querySelector('#menu-link')
$movieLink.addEventListener('mouseenter', function () {
  $movieLink.setAttribute('scale', {x:1.5, y:1.5, z:1.5})
})
$gameLink.addEventListener('mouseenter', function () {
  $gameLink.setAttribute('scale', {x:1.5, y:1.5, z:1.5})
})
$menuLink.addEventListener('mouseenter', function () {
  $menuLink.setAttribute('scale', {x:1.5, y:1.5, z:1.5})
})
$movieLink.addEventListener('mouseleave', function () {
  $movieLink.setAttribute('scale', {x:1, y:1, z:1})
})
$gameLink.addEventListener('mouseleave', function () {
  $gameLink.setAttribute('scale', {x:1, y:1, z:1})
})
$menuLink.addEventListener('mouseleave', function () {
  $menuLink.setAttribute('scale', {x:1, y:1, z:1})
})


//Application/background Change
const minion = '#minion'
const yosemite = '#yosemite'
const gameroom = '#game-room'
const $controllers = document.getElementById('controllers')
const $defaultController = document.getElementById('default-controller')
const $movieController = document.createElement('a-entity')
$controllers.appendChild($movieController)

function renderNewVideo(item) {
  $defaultVideo.setAttribute('src', `${item}`)
}

$movieLink.addEventListener('fusing', () => {
  window.setTimeout(buttonAction, 1000)
  function buttonAction() {
    renderNewVideo(minion)
    $defaultController.setAttribute('visible', false)
    $movieController.setAttribute('visible', true)
    $movieController.setAttribute('video-controls', 'src: #minion')
    $welcome.setAttribute('visible', false)
  }
})

$menuLink.addEventListener('fusing', () => {
  window.setTimeout(buttonAction, 1000)
  function buttonAction() {
    renderNewVideo(yosemite)
    $movieController.setAttribute('visible', false)
    $defaultController.setAttribute('visible', true)
    $welcome.setAttribute('visible', true)
  }
})

$gameLink.addEventListener('fusing', () => {
  window.setTimeout(buttonAction, 1000)
  function buttonAction() {
    renderNewVideo(gameroom)
    $movieController.setAttribute('visible', false)
    $defaultController.setAttribute('visible', false)
    $welcome.setAttribute('visible', false)
  }
})

//WELCOME MESSAGE AND OTHER TEXT FIELDS
const $welcome = document.getElementById('welcome')
$welcome.setAttribute('bmfont-text', 'text: Hi there. Welcome to WebVR!\n Please move cursor to choose; color: yellow')
$welcome.setAttribute('scale', {x:3, y:3, z:0})
