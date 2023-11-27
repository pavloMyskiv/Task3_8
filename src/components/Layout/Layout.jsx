import React from 'react';
import './Layout.scss';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="container">
      <header>
        <h3>React App</h3>
      </header>
      <Outlet />
    </div>
  );
};
