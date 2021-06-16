
import './App.css';
import Home from './pages/home/Home'
import Contact from './pages/contact/contact'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Err404 from './pages/err404/Err404'

function App() {
  return (
   <>
  <BrowserRouter>
   <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/contact" component={Contact} exact/>
    <Route component={Home}/>
    </Switch>
    </BrowserRouter>
    
 </>
  );
}

export default App;
