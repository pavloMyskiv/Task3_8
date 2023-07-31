import React from 'react';
import './UserDetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UserDetails = ({ user }) => {
  return (
    <ul className="user_details">
      <li>
        <FontAwesomeIcon icon="fa-solid fa-signature" size="lg" />
        <p>
          <span>Name: </span>
          {user.name}
        </p>
      </li>
      <li>
        <FontAwesomeIcon icon="fa-regular fa-envelope" size="lg" />
        <p>
          <span>Email: </span>
          {user.email}
        </p>
      </li>
      <li>
        <FontAwesomeIcon icon="fa-solid fa-square-phone" size="lg" />
        <p>
          <span>Phone: </span>
          {user.phone}
        </p>
      </li>
      <li>
        <FontAwesomeIcon icon="fa-location-dot" size="lg" />
        <p>
          <span>Address: </span>
          {user.address.city}, {user.address.street}, {user.address.suite}
        </p>
      </li>
      <li>
        <FontAwesomeIcon icon="fa-solid fa-globe" size="lg" />
        <p>
          <span>Website: </span>
          {user.website}
        </p>
      </li>
      <li>
        <FontAwesomeIcon icon="fa-solid fa-building" size="lg" />
        <p>
          <span>Company: </span>
          {user.company.name}, {user.company.bs}
        </p>
      </li>
    </ul>
  );
};
