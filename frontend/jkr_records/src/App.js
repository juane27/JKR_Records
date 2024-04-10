import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from './components/Header'
import SongsListPage from './pages/SongsListPage'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
          
            <Route path="/" element={<SongsListPage />} />        
     
            
         
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
