import './App.css'
import { Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import LandingPage from './komponen/LandingPage';
import Landing from './Pages/Landing';
import State from './Pages/state';
import EvenHandling from './Pages/handling';



function App () {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/landingpage" Component={Landing}/>
        <Route path="/state" Component={State}/>
        <Route path="/handling" Component={EvenHandling}/>
      </Routes>
    </>
  )
}

export default App