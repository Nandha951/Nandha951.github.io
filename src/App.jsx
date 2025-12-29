import AnalyticsTracker from './components/AnalyticsTracker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="bg-gray-950 min-h-screen text-white font-sans selection:bg-cyan-500 selection:text-black">
            <AnalyticsTracker />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Education />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;
