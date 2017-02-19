const React = require('react')

const board = () => {
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

module.exports = board
