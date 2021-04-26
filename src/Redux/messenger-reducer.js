const SELECT_DIALOG = 'SELECT_DIALOG';
const MESSAGE_TEXT_UPDATE = 'MESSAGE_TEXT_UPDATE';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const selectDialogActionCreator = userName => ({type: SELECT_DIALOG, payload: userName});
export const messageTextUpdateActionCreator = text => ({type: MESSAGE_TEXT_UPDATE, payload: text});
export const sendMessageActionCreator = newMessage => ({type: SEND_MESSAGE, payload: newMessage});

const initialState = {
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
};

const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DIALOG:
      let stateCopy = {...state};
      stateCopy.selectedDialog =
        stateCopy.dialogs.filter(dialog => dialog.user === action.payload)[0].messages;
      return stateCopy;

    case MESSAGE_TEXT_UPDATE: {
      let stateCopy = {...state};
      stateCopy.currentMessageText = action.payload;
      return stateCopy;
    }

    case SEND_MESSAGE: {
      let stateCopy = {...state};
      stateCopy.selectedDialog.push(action.payload);
      stateCopy.currentMessageText = '';
      return stateCopy;
    }

    default:
      return state;
  }
}

export default messengerReducer;
