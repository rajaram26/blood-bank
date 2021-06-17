import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import FindDonar from './components/FindDonar';
import FindBloodBank from './components/FindBloodBank';
import Profile from './components/Profile';
import EditUsers from './components/EditUsers';
import AddDonar from './components/AddDonar';
import addSample from './components/addSample';
import EditDonar from './components/EditDonar';
import EditSample from './components/EditSample';

function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/home" component={Home} />
          <Route path="/findDonar" component={FindDonar} />
          <Route path="/findBank" component={FindBloodBank} />
          <Route path="/register" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/edituser" component={EditUsers} />
          <Route path="/addDonar" component={AddDonar} />
          <Route path="/addSample" component={addSample} />
          <Route path="/editDonars" component={EditDonar} />
          <Route path="/editSample" component={EditSample} />
          <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
