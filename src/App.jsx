import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../node_modules/modern-css-reset/dist/reset.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className='container section flow'>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
