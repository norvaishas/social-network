const SELECT_DIALOG = 'SELECT_DIALOG';
const MESSAGE_TEXT_UPDATE = 'MESSAGE_TEXT_UPDATE';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const selectDialogActionCreator = userName => ({type: SELECT_DIALOG, payload: userName});
export const messageTextUpdateActionCreator = text => ({type: MESSAGE_TEXT_UPDATE, payload: text});
export const sendMessageActionCreator = newMessage => ({type: SEND_MESSAGE, payload: newMessage});

const MessengerReducer = (state, action) => {
  switch (action.type) {
    case SELECT_DIALOG:
      state.selectedDialog =
        state.dialogs.filter(dialog => dialog.user === action.payload)[0].messages;
      return state;

    case MESSAGE_TEXT_UPDATE:
      state.currentMessageText = action.payload;
      return state;

    case SEND_MESSAGE:
      state.selectedDialog.push(action.payload);
      state.currentMessageText = '';
      return state;

    default:
      return state;
  }
}

export default MessengerReducer;
