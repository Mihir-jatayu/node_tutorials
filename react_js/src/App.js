import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './component/home';
import Navbar from './component/navbar';
import SignUp from './component/SignUp';
import PrivatCom from './component/PrivatCom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivatCom />}>
          <Route path='/' element={<Home />} />
          </Route>


          <Route path='/signup' element={<SignUp/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
