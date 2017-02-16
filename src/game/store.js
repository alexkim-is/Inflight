const Redux = require('redux')

const initialState = {
  xposition: 100,
  yposition: 100
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

module.exports = store
