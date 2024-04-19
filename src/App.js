import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route , Routes, Link} from 'react-router-dom';

import Home from './components/Home';
import Colombia from './components/Colombia';
import Mexico from './components/Mexico';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div className="App">
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/colombia">Colombia</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mexico">Mexico</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colombia" element={<Colombia />} />
          <Route path="/mexico" element={<Mexico />} />
        </Routes>
      </div>
    </Router>
  </div>
    
  );
}

export default App;
