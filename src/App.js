import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages';
import Login from './pages/admin/login';
import AdminPage from './pages/admin';

function App() {
  return (
    <Router basename='/index.html'>
      <Route exact path = '/' component={Home}/>
        {/* <Home/> */}
      {/* </Route> */}
      <Route exact path = '/login'>
        <Login/>
      </Route>
      <Route exact path = '/admin'>
        <AdminPage/>
      </Route>
      <div style={{height:'1920', width:'100%',backgroundColor: '#fff' }}/>
    </Router>
  );
}

export default App;
