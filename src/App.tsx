import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import HeroSection from './components/shared/HeroSection'
import TechnologySection from './components/shared/Technologies/Technologysection'
const App = () => {
  return (
    <div className="App">
      <Navbar />

      <HeroSection />

      <main>

        <section>

          <div>

            <TechnologySection />

          </div>

        </section>

      </main>
      
      <Footer />

    </div>
  )
}

export default App
