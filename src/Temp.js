import React from 'react'
import TestAAA from './componets/TestAAA'

const Temp = () => {
  const [text, setText] = React.useState('')

  setText(10)

  setText(true)

  return (
    <>
      <span>Temp: {text}</span>
      <TestAAA />
    </>
  )
}
