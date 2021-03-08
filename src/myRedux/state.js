class Store {

  _state = {
    wall: {
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
    },
    messenger: {
      selectedDialog: ['Select a chat to display messages...'],

      dialogs: [
        {
          user: 'Carles',
          messages: [
            {name: 'Carles', message: 'Es Sergio, ¿cómo está, amigo?', time: '19:39'},
            {name: 'Sergio', message: 'Me van bien. Sí, gracias', time: '19:42'},
            {name: 'Carles', message: 'bla bla', time: '19:39'},
            {name: 'Carles', message: 'visca el Barca!', time: '19:39'},
            {name: 'Sergio', message: 'Forca Barca!', time: '19:42'},
          ],
        },
        {
          user: 'Universe',
          messages: [
            {name: 'Universe', message: 'All be ok :)', time: 'Always'},
            {name: 'Sergio', message: 'So mote it be ))', time: '19:39'},
          ],
        },
        {
          user: 'Ilon',
          messages: [
            {name: 'Ilon', message: 'See u on Mars', time: '11:39'},
            {name: 'Sergio', message: 'So mote it be ))', time: '19:50'},
          ],
        },
        {
          user: 'HR-Google',
          messages: [
            {name: 'HR-Google', message: 'Offer for Sergei...', time: 'Yesterday'},
            {name: 'User', message: 'Some text', time: '29 May 23:07'},
          ]
        },
        {
          user: 'User-23',
          messages: [
            {name: 'User-23', message: 'Some text', time: '29 May 23:07'},
            {name: 'User-223', message: 'qwerty...', time: 'Yesterday'},
          ]
        }
      ],
    }
  }

  _callSubscriber() {
    console.log('_state was updated');
  }

  dispatch = (action) => {
    switch (action.type) {
      case ADD_POST:
        if (this._state.wall.currentPostText === '') {
          return;
        }
        this._state.wall.posts.push({text: this._state.wall.currentPostText});
        this._state.wall.currentPostText = '';
        this._callSubscriber(this._state);
        break;

      case POST_TEXT_UPDATE:
        this._state.wall.currentPostText = action.payload;
        this._callSubscriber(this._state);
        break;

      case SELECT_DIALOG:
        this._state.messenger.selectedDialog =
          this._state.messenger.dialogs.filter(dialog => dialog.user === action.payload)[0].messages;
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

  getLastMessages = () => {
    return this.getState().messenger.dialogs.map(dialog => dialog.messages[0]);
  }

}

// Constants
const ADD_POST = 'ADD_POST';
const POST_TEXT_UPDATE = 'POST_TEXT_UPDATE';

const SELECT_DIALOG = 'SELECT_DIALOG';

// Action creators
export const addPostActionCreator = () => ({type: ADD_POST})
export const postTextUpdateActionCreator = text => ({type: POST_TEXT_UPDATE, payload: text})

export const selectDialogActionCreator = userName => ({type: SELECT_DIALOG, payload: userName});

const store = new Store();

export default store;
