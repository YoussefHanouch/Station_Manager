import React from 'react'
import { createRoot } from 'react-dom/client';
import { Route,Routes,BrowserRouter} from 'react-router-dom';
import Nav from './Components/Nav';
import LoginUser from './Components/LoginUser';
import Admin from './Components/Admin';
import Products from './Products';

const root =createRoot(document.getElementById('root'));
function App() {

  return (
    <div>
    <Routes>
    <Route path='/' element={<LoginUser/>}  />
    <Route path='/admin' element={<Admin/>}  />
    <Route path='/nav' element={<Nav/>}  />
    <Route path='/products' element={<Products/>}  />
    
    </Routes>
    </div>
  )
}

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)






