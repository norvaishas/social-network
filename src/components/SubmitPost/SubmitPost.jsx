import React from 'react';

const SubmitPost = ({ createPost, changePostText, OnCtrlEnterPress, currentPostText, newPostText }) => {
  return (
    <form onSubmit={createPost}>
      <textarea onChange={changePostText} onKeyDown={OnCtrlEnterPress} ref={newPostText}  value={currentPostText}/>
      <button>Add post</button>
    </form>
  )
}

export default SubmitPost;
