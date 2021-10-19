import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages';

function App() {
  return (
    <Router >
      <Home/>
      <div style={{height:'1920', width:'100%',backgroundColor: '#fff' }}/>
    </Router>
  );
}

export default App;
