import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/home/home';
import About from './components/about/about';
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/home' element={ <Home/>} />
        <Route path='/About' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
