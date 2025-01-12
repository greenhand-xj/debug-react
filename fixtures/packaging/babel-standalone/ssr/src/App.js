import React from 'react'

const App = () => {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello, SSR!'),
    React.createElement(
      'p',
      null,
      'This is a simple server-side rendered React application.',
    ),
  )
}

export default App
