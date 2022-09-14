import './App.css';
import Miners from './miners/Miners';
import Navbar from './miners/Navbar';
// import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Miners/>}>
          </Route>
        </Routes>
      </BrowserRouter>
         */}
      <Miners/>
    </div>
  );
}
 
export default App;
