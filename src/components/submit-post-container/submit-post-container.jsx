import React from 'react';
import {addPostActionCreator, postTextUpdateActionCreator} from '../../Redux/wall-reducer';
import SubmitPost from '../SubmitPost/SubmitPost';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentPostText: state.wall.currentPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (event) => {
      event.preventDefault();
      dispatch(addPostActionCreator())
    },
    changePostText: (text) => {
      dispatch(postTextUpdateActionCreator(text));
    },
  }
}

const SubmitPostContainer = connect(mapStateToProps, mapDispatchToProps)(SubmitPost)


/*const SubmitPostContain = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          // const newPostText = React.createRef();

          const createPost = (event) => {
            event.preventDefault();
            store.dispatch(addPostActionCreator());
          };

          const changePostText = () => {
            store.dispatch(postTextUpdateActionCreator(newPostText.current.value))
          };

          return (
            <SubmitPost
              createPost={createPost}
              changePostText={changePostText}
              // OnCtrlEnterPress={OnCtrlEnterPress}
              // newPostText={newPostText}
              // currentPostText={store.getState().wall.currentPostText}
            />
          )
        }
      }
    </StoreContext.Consumer>
  )
}*/

export default SubmitPostContainer;
