const React = require('react')
const ReactDOM = require('react-dom')
const Redux = require('redux')

const initialState = {
  xposition: 100,
  yposition: 100
}

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

const Board = () => {
  const props = {
    width: 400,
    height: 400,
    border: '1px black solid',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'grey'
  }
  return (
      <div className='board' style={ props }></div>
  )
}


const Player = ({ xposition, yposition }) => {
  const props = {
    left: xposition + 'px',
    top: yposition + 'px',
    position: 'absolute'
  }
  return (
      <div className='player'>
        <img src='https://goo.gl/LKlZo3' style={ props } id='car'></img>
      </div>
    )
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'MOVE_LEFT':
      return Object.assign({}, state, {
       xposition: state.xposition - 80
      })
    case 'MOVE_RIGHT':
      return Object.assign({}, state, {
       xposition: state.xposition + 80
      })
    case 'MOVE_UP':
      return Object.assign({}, state, {
       yposition: state.yposition - 80
      })
    case 'MOVE_DOWN':
      return Object.assign({}, state, {
       yposition: state.yposition + 80
      })
    default:
      return state
  }
}

const store = Redux.createStore(reducer, initialState)

const App = ({ state, dispatch }) => {
  const { xposition, yposition} = state
  return (
    React.createElement('div', null, React.createElement(Board, { xposition, yposition, dispatch, Player}),
      React.createElement('div', null, React.createElement(Player, { xposition, yposition, dispatch}))
    )
  )
}

const redraw = () => {
  const state = store.getState()
  const { dispatch } = store
  ReactDOM.render(
    React.createElement(App, {state, dispatch}),
    document.getElementById('App')
  )
}

store.subscribe(redraw)
redraw()
