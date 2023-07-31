import React from 'react';
import './AlbumsList.scss';
import { useGetAlbumsQuery } from '../../store/AppAPI/albumAPI';

export const AlbumsList = ({ userId }) => {
  const {
    data: albumsList = [],
    isLoading,
    error,
    isError,
  } = useGetAlbumsQuery(userId);

  if (isLoading) {
    return (
      <div className="album_list">
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="album_list">
        <div className="error">
          <h3>ERROR:{error.status}</h3>
          <p>{JSON.stringify(error.data)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="album_list">
      {albumsList.map((album) => (
        <div className="album" key={album.id}>
          <h2>{album.title}</h2>
        </div>
      ))}
    </div>
  );
};
