const ADD_POST = 'ADD_POST';
const POST_TEXT_UPDATE = 'POST_TEXT_UPDATE';

export const addPostActionCreator = () => ({type: ADD_POST});
export const postTextUpdateActionCreator = text => ({type: POST_TEXT_UPDATE, payload: text});

const WallReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      if (state.currentPostText === '') {
        return;
      }
      state.posts.push({text: state.currentPostText});
      state.currentPostText = '';
      return state;

    case POST_TEXT_UPDATE:
      state.currentPostText = action.payload;
      return state;

    default:
      return state;
  }
}

export default WallReducer;
