const Redux = require('redux')
const { Box } = require('components.js')

const initialState = {
  enemySpeed: 1,
  position: 10,
  highScore: 0,
  time: 0,
  alive: true
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'MOVE_LEFT':
      return Object.assign({}, state, {
        playerPosition: state.playerPosition -5
      })
    case 'MOVE_RIGHT':
      return Object.assign({}, state, {
        playerPosition: state.playerPosition +5
      })
    case 'CRASH':
      return Object.assign({}, state, {
        alive: false
      })
    default:
      return state
  }
}

const Player = () => {
  const { position } = store.getState()
  const handleChange = () => {
    let newDirection
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowLeft':
            newDirection = 'left'
          break
        case 'ArrowRight':
          newDirection = 'right'
          break
        default:
          return
      }
      event.preventDefault()
      if (newDirection == 'left') {
        store.dispatch({ type: 'MOVE_LEFT'})
      }
      else if (newDirection == 'right') {
        store.dispatch({ type: 'MOVE_RIGHT'})
      }
    })
  }
}

const Greeting = () => {
  const valuee = 'hello!'
  return (
    React.createElement('div', { className: 'greeting'},
      React.createElement('p', valuee)
    )
  )
}

const App = () => {
  return (
    React.createElement('div', null,
      React.createElement(Greeting),
    )
  )
}

const redraw = () => {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('App')
  )
}

const store = Redux.createStore(reducer, initialState)
store.subscribe(redraw)
redraw()
