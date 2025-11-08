import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
        <footer className="py-10 text-center text-sm text-gray-600">© {new Date().getFullYear()} Lokesh Jena — Built with passion and curiosity.</footer>
      </main>
    </div>
  )
}

export default App
