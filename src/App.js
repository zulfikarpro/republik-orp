import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages';
import LoginPage from './pages/admin/LoginPage.js';
import AdminPage from './pages/admin/AdminPage.js';

function App() {
  return (
    <Router basename='/'>
      <Route exact path = '/' component={Home}/>
      <Route exact path = '/login' component={{LoginPage}}/>
      <Route exact path = '/admin' component={{AdminPage}}/>
    </Router>
  );
}

export default App;
