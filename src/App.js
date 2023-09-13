import './App.css';
import About from "./components/About";
import Resume from './components/Resume';
import AnimatedCursor from "react-animated-cursor"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <Router>
    <main>
      <AnimatedCursor
      innerSize={10}
      outerSize={8}
      color='244, 0, 9'
      outerAlpha={0.2}
      innerScale={1}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </main>
  </Router>
  );
}

export default App;

