import './App.css';
import Navbar from './pages/navbar';
import Homepage from './pages/homepage';
import Highlights from './pages/highlights';
import ContactPage from './pages/contact';
import Footer from './pages/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Homepage />} /> {/* Use element prop */}
          <Route path="/highlights" element={<Highlights />} /> {/* Use element prop */}
          <Route path="/contact" element={<ContactPage />} /> {/* Use element prop */}
        </Routes> {/* Close Routes */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
