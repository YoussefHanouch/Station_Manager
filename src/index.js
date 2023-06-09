import React from 'react'
import { createRoot } from 'react-dom/client';
import { Route,Routes,BrowserRouter} from 'react-router-dom';
import Nav from './Nav';
import LoginUser from './LoginUser';
import Admin from './Admin';
import Products from './Products';
import ForgetPassword from './ForgetPassword';

const root =createRoot(document.getElementById('root'));
function App() {

  return (
    <div>
    <Routes>
     <Route path='/' element={<nav/>}  />
    <Route path='/admin' element={<Admin/>}  />
    <Route path='/Login' element={<LoginUser/>}  />
    <Route path='/products' element={<Products/>}  />
      <Route  path="/forgotPassword" element={<ForgetPassword/>} />
    
    </Routes>
    </div>
  )
}

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)






