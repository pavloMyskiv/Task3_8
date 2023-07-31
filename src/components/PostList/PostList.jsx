import React from 'react';
import './PostList.scss';
import {
  useGetPostsQuery,
  useAddPostMutation,
} from '../../store/AppAPI/postAPI.js';
import AddPostForm from '../AddPostForm';

export const PostList = ({ userId }) => {
  const [addPostMutation] = useAddPostMutation();
  const {
    data: postsList = [],
    isLoading,
    error,
    isError,
  } = useGetPostsQuery(userId);
  const handleAddPost = (data) => {
    const newPost = {
      userId: userId,
      id: Date.now(),
      ...data,
    };
    addPostMutation(newPost);
  };
  if (isLoading) {
    return (
      <div className="post_list">
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="post_list">
        <div className="error">
          <h3>ERROR:{error.status}</h3>
          <p>{JSON.stringify(error.data)}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="post_list">
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
