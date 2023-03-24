import React from 'react'

const App = () => {
  const handleClick = () => {
    console.log('clicked')
  }
  return (

    <div>
    <button onClick={handleClick}>Add animal</button>
    </div>
  )
}

export default App;
