import React from 'react';
import {addPostActionCreator, postTextUpdateActionCreator} from '../../myRedux/state';

const SubmitPost = ({ dispatch, currentPostText }) => {
  const newPostText = React.createRef();

  const createPost = () => {
    dispatch(addPostActionCreator());
  };

  const changePostText = () => {
    dispatch(postTextUpdateActionCreator(newPostText.current.value))
  };

  return (
    <>
      <textarea onChange={changePostText} ref={newPostText}  value={currentPostText}/>
      <button onClick={createPost}>Add post</button>
    </>
  )
}

export default SubmitPost;
