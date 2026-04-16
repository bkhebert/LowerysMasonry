import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Layout from "./components/Layout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        {/* Layout Wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* Placeholder pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
