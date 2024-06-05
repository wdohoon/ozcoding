import logo from './logo.svg';
import './App.css';
import {BorwserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';

function Layout () {
  return(
    <>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/blog'}>Blog</Link>
        </li>
      </ul>
      <Outlet/>
    </>
  )
}

function App() {
  return (
    <div className="App">
        
        <BorwserRouter>
          <Routes>
            
            <Route path='/' element={<Layout/>}/>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='blog' element={<Blog/>}/>

          </Routes>
        </BorwserRouter>
    </div>
  );
}

export default App;
