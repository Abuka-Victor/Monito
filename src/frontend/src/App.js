import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Faqs from './components/FAQS/Faqs';
import Landing from './components/Landing';
import Register from './components/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/faq" element={<Faqs />} />
        <Route exact path="/reg/:option" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
