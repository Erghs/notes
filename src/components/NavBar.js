import React  from 'react'
import {  Link } from 'react-router-dom';

export const NavBar=()=>{
   return(
       <div>
    <ul className="nav justify-content-center">
    <li className="nav-item">
      <Link to="/" className="nav-link active"  >Главная</Link>
    </li>
    <li className="nav-item">
      <Link to="/nodes" className="nav-link">Заметки</Link>
    </li>
    <li className="nav-item">
      <Link to="/about" className="nav-link" >Информация</Link>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled">Nodes</a>
    </li>
  </ul>
  </div>
   )
    
}