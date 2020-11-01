import React, { useEffect } from 'react';
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../modules/posts";

const PostContainer = ({ postId }) => {

  const {data , loading , error} = useSelector(state => state.props.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  },[postId, dispatch])

  if (loading) return <div>로딩중...</div>
  if (error) return <div>에러 발생</div>
  if (!data) return null

  return (
    <div>
      <Post />
    </div>
  );
};

export default PostContainer;
