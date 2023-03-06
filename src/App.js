import './App.css';
import { useState } from 'react';
import { BrowserRouter , Routes , Route , Navigate , Outlet } from "react-router-dom";
import Login from './Components/Account/Login.jsx';
import Home from './Components/HomePage/Home';
import DataProvider from './context/DataProvider';

const PrivateRoute = ({isAuthenticated,...props}) => {
  return (isAuthenticated===true ? <>
    <Outlet/>
  </>:
  <Navigate replace to='/'/>
  )
}

function App() {
  const [isAuthenticated,isUserAuthenticated] = useState(false);

  return (
    <div className='App'>
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path='/' element={<Login isUserAuthenticated={isUserAuthenticated}/>}/>
          <Route path='/home' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
            <Route path='/home' element={<Home/>}/>
          </Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
