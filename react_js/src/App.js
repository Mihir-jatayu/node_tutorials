import { BrowserRouter,Switch,Route} from "react-router-dom";
import Home from './component/home';
import About from './component/about';
import Navbar from './component/navbar';
import profile from './component/user';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/profile/:name' component={profile} />
        </Switch>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
