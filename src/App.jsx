import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import WebPage from './WebPage'

function App() {


  return (
      <Routes>
        <Route path="/" element={<WebPage/>} />
      </Routes>
    
  )
}

export default App
