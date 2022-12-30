// import logo from './logo.svg';
import './App.css';
// import React from "react";
import About from "./components/About";
// import Navbar from "./components/Navbar";
// import { Route, Routes } from 'react-router-dom'
// import React, {useState, useEffect} from 'react';
// import { useMediaQuery } from 'react-responsive'
import AnimatedCursor from "react-animated-cursor"




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

function App() {
  // const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
  // const isBigScreen = useMediaQuery({ minWidth: 1824 })
  // const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  // const isPortrait = useMediaQuery({ orientation: 'portrait' })
  // const isRetina = useMediaQuery({ minResolution: '2dppx' })
  return (
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
      <About />
      {/* <Navbar /> */}

    </main>

    // <Routes>
    //   <Route path="/" element={<About />}>
    //   </Route>
    // </Routes>

  );
}

export default App;

