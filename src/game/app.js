const React = require('react')
const ReactDOM = require('react-dom')
const Player = require('./Player')
const Board = require('./Board')
const store = require('./store')

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
