import React from 'react';
import {addPostActionCreator, postTextUpdateActionCreator} from '../../myRedux/wall-reducer';

const SubmitPost = ({ dispatch, currentPostText }) => {
  const newPostText = React.createRef();

  const createPost = (event) => {
    event.preventDefault();
    dispatch(addPostActionCreator());
  };

  const changePostText = () => {
    dispatch(postTextUpdateActionCreator(newPostText.current.value))
  };

  const OnCtrlEnterPress = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      createPost(event)
    }
  };

  return (
    <form onSubmit={createPost}>
      <textarea onChange={changePostText} onKeyDown={OnCtrlEnterPress} ref={newPostText}  value={currentPostText}/>
      <button>Add post</button>
    </form>
  )
}

export default SubmitPost;
