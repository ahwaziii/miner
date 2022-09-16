import './App.css';
import Miners from './miners/Miners';
import Navbar from './miners/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Weblayout from './Weblayout';
import Context from './context';
import UserLog from './miners/UserLog';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <Context>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Weblayout />}>
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/miner' element={<Miners />}>   </Route>
            <Route path='/user'  element={<UserLog />}/> </Route>
        </Routes>
      </BrowserRouter>
      </Context>
      
    </div>
  );
}
 
export default App;
