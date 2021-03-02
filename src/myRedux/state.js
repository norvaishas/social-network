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

  _rerenderEntireTree() {
    console.log('_state was updated');
  }

  postsUpdate = () => {
    if (this._state.currentPostText === '') {
      return;
    }
    this._state.posts.push({text: this._state.currentPostText});
    this._state.currentPostText = '';
    this._rerenderEntireTree(this._state);
  }

  postTextUpdate = newText => {
    this._state.currentPostText = newText;
    this._rerenderEntireTree(this._state);
  }

  subscribe = observer => {
    this._rerenderEntireTree = observer;
  }

  getState = () => {
    return this._state;
  }

}

const store = new Store();

export default store;
