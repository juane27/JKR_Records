import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from './components/Header'
import SongsListPage from './pages/SongsListPage'
import SongsInfoPage from './pages/SongsInfoPage';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
          
            <Route path="/" element={<SongsListPage />} />        
            <Route path="/song/" element={<SongsInfoPage />} /> {/* Agrega esta línea */}

            
         
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
