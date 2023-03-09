import './App.css';
import { useState } from 'react';
import { BrowserRouter , Routes , Route , Navigate , Outlet } from "react-router-dom";
import Login from './Components/Account/Login.jsx';
import Home from './Components/HomePage/Home.jsx';
import Create from './Components/CreatePost/Create.jsx';
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
          <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
            <Route path='/create' element={<Create/>}/>
          </Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
