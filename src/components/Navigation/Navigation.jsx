import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './Navigation.scss';

export const Navigation = () => {
  const { id } = useParams();
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={`/user/${id}/todoList`}>Todos</NavLink>
        </li>
        <li>
          <NavLink to={`/user/${id}/postlist`}>Posts</NavLink>
        </li>
        <li>
          <NavLink to={`/user/${id}/albumList`}>Albums</NavLink>
        </li>
        <li>
          <NavLink to={`/user/${id}`}>User Details</NavLink>
        </li>
      </ul>
    </nav>
  );
};
