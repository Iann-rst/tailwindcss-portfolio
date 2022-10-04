import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {

  return (
    <div className="App">
      {/**HEADER */}
      <Header />

      {/**SEÇÕES */}
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>

      {/** FOOTER */}
      <Footer />
    </div>
  )
}

export default App
