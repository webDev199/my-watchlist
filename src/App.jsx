import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/Landing';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Favorites from './components/Favorites';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
        <Footer />
      </div>    
    </Router>

  );
}

export default App;
