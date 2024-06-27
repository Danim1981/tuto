import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './views/Home'
import Contact from './views/Contact'
import NotFound from './views/NotFound'
import Recipes from './views/Recipes'



function App() {
  

  return (
    <BrowserRouter>
    <Navigation/>
    <main className='container mt-3'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/recetas/:ide" element={<Recipes/>}/>
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App
