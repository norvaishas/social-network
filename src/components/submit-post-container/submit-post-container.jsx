import React from 'react';
import {addPostActionCreator, postTextUpdateActionCreator} from '../../Redux/wall-reducer';
import SubmitPost from '../SubmitPost/SubmitPost';
import StoreContext from '../../store-context';

const SubmitPostContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const newPostText = React.createRef();

          const createPost = (event) => {
            event.preventDefault();
            store.dispatch(addPostActionCreator());
          };

          const changePostText = () => {
            store.dispatch(postTextUpdateActionCreator(newPostText.current.value))
          };

          const OnCtrlEnterPress = (event) => {
            if (event.ctrlKey && event.keyCode === 13) {
              createPost(event)
            }
          };

          return (
            <SubmitPost
              createPost={createPost}
              changePostText={changePostText}
              OnCtrlEnterPress={OnCtrlEnterPress}
              newPostText={newPostText}
              currentPostText={store.getState().wall.currentPostText}
            />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default SubmitPostContainer;
