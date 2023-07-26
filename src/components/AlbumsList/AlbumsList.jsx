import React from 'react';
import { useParams } from 'react-router-dom';
import './AlbumsList.scss';
import { useGetAlbumsQuery } from '../../store/AppAPI/albumAPI';

export const AlbumsList = () => {
  const { id } = useParams();
  const {
    data: albumsList = [],
    isLoading,
    error,
    isError,
  } = useGetAlbumsQuery(id);

  if (isLoading) {
    return (
      <div className="album_list">
        <h1>Albums</h1>
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="album_list">
        <h1>Albums</h1>
        <div className="error">
          <h3>ERROR:{error.status}</h3>
          <p>{JSON.stringify(error.data)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="album_list">
      <h1>Albums</h1>
      {albumsList.map((album) => (
        <div className="album" key={album.id}>
          <h2>{album.title}</h2>
        </div>
      ))}
    </div>
  );
};
