import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Contacto } from './components/Contact'
import './css/App.css'

function App () {
  return (
    <>
      <Header />
      <main className='main'>
        <Hero />
        <About />
        <Portfolio />
        <Contacto />
      </main>
    </>
  )
}

export default App
