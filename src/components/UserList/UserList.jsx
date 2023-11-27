import React from 'react';
import './UserList.scss';
import { useGetUsersQuery } from '../../store/AppAPI/userAPI.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UserList = () => {
  const {
    data: usersList = [],
    isLoading,
    error,
    isError,
  } = useGetUsersQuery();

  if (isLoading) {
    return (
        <div className="user_list">
          <h1>Users</h1>
          <div className="loader"></div>
        </div>
    );
  }
  if (isError) {
    return (
        <div className="user_list">
          <h1>Users</h1>
          <div className="error">
            <h3>ERROR:{error.status}</h3>
            <p>{JSON.stringify(error.data)}</p>
          </div>
        </div>
    );
  }

  return (
    
      <div className="user_list">
        <h1>Users</h1>
        {usersList.map((user) => (
          <div key={user.id} className="user">
            <div className="user_info">
              <h2>{user.username}</h2>
              <p>
                <span>Name:</span> {user.name}
              </p>
            </div>
            <Link to={`/user/${user.id}`}>
              <button>
                <FontAwesomeIcon
                  icon="fa-solid fa-right-to-bracket"
                  size="lg"
                />
              </button>
            </Link>
          </div>
        ))}
      </div>
  );
};
