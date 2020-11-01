import React from 'react';
import PostListContainer from "../containers/PostListContainer";

const PostPage = ({ match }) => {

  const {id} = match.params;
  const postId = parseInt(id, 10);

  return (
    <div>
      <PostListContainer postId={postId}/>
    </div>
  );
};

export default PostPage;
