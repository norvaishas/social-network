import React from 'react';

const SubmitPost = ({ createPost, changePostText, currentPostText }) => {

  const newPostText = React.createRef()

  const OnCtrlEnterPress = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      createPost(event)
    }
  }

  return (
    <form onSubmit={createPost}>
      <textarea
        onChange={() => {changePostText(newPostText.current.value)}}
        onKeyDown={OnCtrlEnterPress}
        ref={newPostText}
        value={currentPostText}
      />
      <button>Add post</button>
    </form>
  )
}

export default SubmitPost;
