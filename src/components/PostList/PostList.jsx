import React from 'react';
import { useParams } from 'react-router-dom';
import './PostList.scss';
import {
  useGetPostsQuery,
  useAddPostMutation,
} from '../../store/AppAPI/postAPI.js';
import AddPostForm from '../AddPostForm';

export const PostList = () => {
  const { id } = useParams();
  const [addPostMutation] = useAddPostMutation();
  const {
    data: postsList = [],
    isLoading,
    error,
    isError,
  } = useGetPostsQuery(id);
  const handleAddPost = (data) => {
    const newPost = {
      userId: id,
      id: Date.now(),
      ...data,
    };
    addPostMutation(newPost);
  };
  if (isLoading) {
    return (
      <div className="post_list">
        <h1>Posts</h1>
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="post_list">
        <h1>Posts</h1>
        <div className="error">
          <h3>ERROR:{error.status}</h3>
          <p>{JSON.stringify(error.data)}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="post_list">
      <h1>Posts</h1>
      <AddPostForm handleAddPost={handleAddPost} />
      {postsList.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
