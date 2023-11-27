import React from 'react';
import './UserPage.scss';
import { NavLink, useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../store/AppAPI/userAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserDetails } from '../UserDetails/UserDetails';
import PostList from '../PostList';
import TodoList from '../TodoList';
import AlbumsList from '../AlbumsList';
import TabMenu from '../TabMenu';

export const UserPage = () => {
  const { id } = useParams();
  const { data: user = {}, isLoading, error, isError } = useGetUserQuery(id);
  if (isLoading) {
    return (
      <div>
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="error">
        <h3>ERROR:{error.status}</h3>
        <p>{JSON.stringify(error.data)}</p>
      </div>
    );
  }
  return (
    <div className="user_page">
      <div className="user">
        <FontAwesomeIcon icon="circle-user" size="4x" />
        <h2>{user.username}</h2>
        <NavLink to={`/`}>
          <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
        </NavLink>
      </div>
      <UserDetails user={user} />
      <TabMenu>
        <AlbumsList label="Albums" userId={user.id} />
        <TodoList label="Todos" userId={user.id}/>
        <PostList label="Posts" userId={user.id}/>
      </TabMenu>
    </div>
  );
};
