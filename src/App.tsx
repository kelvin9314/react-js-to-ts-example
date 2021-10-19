import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [valueOfId, setValueOfId] = React.useState('')
  const [type, setType] = React.useState('')

  const handleSelectValueChange = () => {
    console.log('handleSelectValueChange')
  }

  const handleIdValueChange = () => {
    console.log('handleIdValueChange')
    // console.log(e)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>簡易 身份證/居留證 驗證器</p>
        <div>
          <select value={type} onChange={handleSelectValueChange}>
            <option value="">請選擇證件類別</option>
            <option value="I" onClick={() => setType('I')}>
              身份證
            </option>
            <option value="R" onClick={() => setType('R')}>
              居留證
            </option>
          </select>
          <input type="text" placeholder="請輸入證號" value={valueOfId} onChange={handleIdValueChange} />
        </div>
      </header>
    </div>
  )
}

export default App

// const handleSelectValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//   // console.log('handleSelectValueChange')
//   console.log(e)
// }

// const handleIdValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   console.log('handleIdValueChange')
//   const text = e.target.value
//   setValueOfId(text)
// }
