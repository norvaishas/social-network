const ADD_POST = 'ADD_POST';
const POST_TEXT_UPDATE = 'POST_TEXT_UPDATE';

export const addPostActionCreator = () => ({type: ADD_POST});
export const postTextUpdateActionCreator = text => ({type: POST_TEXT_UPDATE, payload: text});

const initialState = {
  currentPostText: '',
  posts: [
    {text: 'Post 1'},
    {text: 'Post 2'},
    {text: 'Post 3'},
    {text: 'Post 4'},
    {text: 'Post 5'},
    {text: 'Post 6'},
    {text: 'Post 7'}
  ],
};

const wallReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let stateCopy = {...state, posts: [...state.posts]};
      if (stateCopy.currentPostText === '') {
        return;
      }
      stateCopy.posts.push({text: stateCopy.currentPostText});
      stateCopy.currentPostText = '';
      return stateCopy;
    }

    case POST_TEXT_UPDATE:
      let copyState = {...state};
      copyState.currentPostText = action.payload;
      return copyState;

    default:
      return state;
  }
}

export default wallReducer;
