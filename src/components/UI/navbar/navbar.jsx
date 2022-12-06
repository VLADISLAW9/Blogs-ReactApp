import React, { useContext } from "react";
import cl from './navbar.module.css';
import { BrowserRouter , Router, Routes, Route, Link } from 'react-router-dom';
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context/context";

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }

  return (
    <div className={cl.navbar}>
      <MyButton onClick={logout}>
        Выйти
      </MyButton>
      <div className={cl.navbar__links}>
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;
