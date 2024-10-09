import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes,Route} from 'react-router-dom'
import Fetchdata from './component/Fetchdata'
import Edit from './component/Edit'
import Delete from './component/Delete'
import Home from './component/Home'
import Additem from './component/Additem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/edit/:eid" element={<Edit/>}/>
      <Route path="/delete/:id" element={<Delete/>}/>
      <Route path="/addnew" element={<Additem/>}/>
    </Routes>
   
     
    </>
  )
}

export default App
