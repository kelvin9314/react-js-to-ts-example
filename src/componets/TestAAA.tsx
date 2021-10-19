import React from 'react'

interface TestAAAProps {
  text: string
}

const TestAAA = (props: TestAAAProps) => {
  console.log(props.text)
  return (
    <div>
      <h2>TestAAA Component</h2>
      <span>{props.text}</span>
    </div>
  )
}

export default TestAAA
