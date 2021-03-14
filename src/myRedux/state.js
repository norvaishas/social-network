import WallReducer from './wall-reducer';
import MessengerReducer from './messenger-reducer';

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
      selectedDialog: 'Select a chat to display messages...',
      currentMessageText: '',
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
    this._state.wall = WallReducer(this._state.wall, action);
    this._state.messenger = MessengerReducer(this._state.messenger, action);
    this._callSubscriber(this._state);
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

const store = new Store();

export default store;
