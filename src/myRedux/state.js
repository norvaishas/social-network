class Store {

  _state = {
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
    dialogs: [
      {name: 'Sergio', message: 'Vamos!', time: '19:39'},
      {name: 'Universe', message: 'All be ok :)', time: 'Always'},
      {name: 'Ilon', message: 'See u on Mars', time: '11:39'},
      {name: 'HR-Google', message: 'Offer for Sergei...', time: 'Yesterday'},
      {name: 'User', message: 'Some text', time: '29 May 23:07'},
    ],
  }

  _callSubscriber() {
    console.log('_state was updated');
  }

  dispatch = (action) => {
    switch (action.type) {
      case ADD_POST:
        if (this._state.currentPostText === '') {
          return;
        }
        this._state.posts.push({text: this._state.currentPostText});
        this._state.currentPostText = '';
        this._callSubscriber(this._state);
        break;

      case POST_TEXT_UPDATE:
        this._state.currentPostText = action.payload;
        this._callSubscriber(this._state);
        break;

      default:
        console.log('nothing to change');
    }
  }

  subscribe = observer => {
    this._callSubscriber = observer;
  }

  getState = () => {
    return this._state;
  }

}

// Constants
const ADD_POST = 'ADD_POST';
const POST_TEXT_UPDATE = 'POST_TEXT_UPDATE';

// Action creators
export const addPostActionCreator = () => ({type: ADD_POST})
export const postTextUpdateActionCreator = text => ({type: POST_TEXT_UPDATE, payload: text})

const store = new Store();

export default store;
