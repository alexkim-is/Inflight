const store = require('./store')

document.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 37:
      store.dispatch({ type: 'MOVE_LEFT'})
      break
    case 38:
      store.dispatch({ type: 'MOVE_UP'})
      break
    case 39:
      store.dispatch({ type: 'MOVE_RIGHT'})
      break
    case 40:
      store.dispatch({ type: 'MOVE_DOWN'})
      break
    default:
      return
  }
})

const Player = ({ xposition, yposition }) => {
  const props = {
    left: xposition + 'px',
    top: yposition + 'px',
    position: 'absolute',
    backgroundColor: 'red'
  }

  return (
      <div className='player'>
        <img src='https://goo.gl/LKlZo3'
            // onKeyDown={ store.dispatch }
            style={ props }
            id='car'></img>
      </div>
    )
}

module.exports = Player
