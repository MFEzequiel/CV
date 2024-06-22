import './css/App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Skills } from './components/Skills'
import { Portfolio } from './components/Portfolio'
import { Contacto } from './components/Contact'


function App() {

  return (
    <>
      <Header />
      <main className="main">
        <section className="main__sect">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='/Contact' element={<Contacto />} />
          </Routes>
        </section>
      </main>
    </>
  )
}

export default App
