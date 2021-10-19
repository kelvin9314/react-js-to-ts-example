import React from 'react'

const Temp = () => {
  const [text, setText] = React.useState('')

  // setText(10)

  return <span>Temp: {text}</span>
}
