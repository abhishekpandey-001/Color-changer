import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Display from './components/Display'

function App() {
  const [count, setCount] = useState('transparent')

  const colors = ['red', 'lightseagreen', 'blue', 'orange', 'pink', 'yellow']

  function changeColor(){
    console.log("color changed")
  }

  return (
    <div>
      <h1>🎨 Dynamic color changer</h1>
      <div className='flex mt-5'>
        {
          colors.map((items) => {
            return (<Buttons colors={items} key={items} func = {setCount}/>)
          })
        }
      </div>
      <Display count = {count}/>
    </div>
  )
}

export default App
