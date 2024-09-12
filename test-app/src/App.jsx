import Test1  from './comps/Test1'
import Test2  from './comps/Test2'
import SharedLogic from './comps/SharedLogic'
import './App.css'

function App() {


  return (
    <>
    <h1>check</h1>
    <Test1 shared = {<SharedLogic />}/>
      <br></br>
    <Test2 shared = {<SharedLogic Test2 />}/>
  </>
  )
}

export default App
