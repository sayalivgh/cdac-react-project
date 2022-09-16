import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Sales from './components/Sales/Sales';
import MaterialBills from './components/MaterialBills/MaterialBills';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <Login/>
    // <Router>
    //   <Header/>
    //   <Routes>
    //     <Route path='/' element={ <Home/>} />
    //     <Route path='/home' element={ <Home/>} />
    //     <Route path='/sales' element={ <Sales/>} />
    //     <Route path='/material-bills' element={<MaterialBills/>}/>
    //   </Routes>
    // </Router>
  );
}

export default App;
