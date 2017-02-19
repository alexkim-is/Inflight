const React = require('react')
const ReactDOM = require('react-dom')
const player = require('./player')
const Board = require('./board')
const store = require('./store')

const App = ({ state, dispatch }) => {
  const { xposition, yposition} = state
  return (
    React.createElement('div', null, React.createElement(board, { xposition, yposition, dispatch, Player}),
      React.createElement('div', null, React.createElement(player, { xposition, yposition, dispatch}))
    )
  )
}

const redraw = () => {
  const state = store.getState()
  const { dispatch } = store
  ReactDOM.render(
    React.createElement(App, {state, dispatch}),
    document.getElementById('gamewall')
  )
}

store.subscribe(redraw)
redraw()
