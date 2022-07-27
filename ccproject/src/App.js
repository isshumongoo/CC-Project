import './App.css';
import UserInfo from './components/UserInfo';
import Registration from './components/Registration';
import Forgot from './components/Forgot';
import Change from './components/change';
import AccountPage from './components/AccountPage';
import Privacy from './components/Privacy';
import Login from './components/Login';
import Map from './components/Map';
import Tester from './components/Tester'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    
      {/* //3670B8 is hex code for CC blue 
      //BBDD99 is hex code for CC green
      //82C341 is hex code for darker CC green */}
      
      {/* <Tester/> */}
      <Map/>
      {/* <Routes>
        <Route path='/' element={<Map/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Account' element={<AccountPage/>}/>
        <Route path='Registration' element={<Registration/>}/>
        <Route path='UserInfo' element={<UserInfo/>}/>
        <Route path='Forgot' element={<Forgot/>}/>
        <Route path='Change' element={<Change/>}/>
        <Route path='Privacy' element={<Privacy/>}/>
      </Routes> */}
      
    </div>
  );
}

export default App;
