import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ItemListContainer from './components/ItemListContainer'
import Error from './components/Error'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='Items'element={<ItemListContainer/>}/>
          <Route path='Item'element={<Details/>}/>
          <Route path='Cart'element={<CartWidget/>}/>
          <Route path='*'element={<Error/>}/>
        </Route>
      </BrowserRouter>
    </>
  )
}

export default App
