import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import SejaVoluntario from './components/pages/sejaVoluntario/SejaVoluntario';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './globalStyler.scss';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voluntario" element={<SejaVoluntario />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
