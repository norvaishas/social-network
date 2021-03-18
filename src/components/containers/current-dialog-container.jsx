import React from 'react';
import SendMessage from '../send-message/send-message';
import CurrentDialog from '../current-dialog/current-dialog';
import {messageTextUpdateActionCreator, sendMessageActionCreator} from '../../Redux/messenger-reducer';

const CurrentDialogContainer = ({ store }) => {
  const messenger = store.getState().messenger;
  const { selectedDialog, currentMessageText } = messenger;

  const sendMessage = message => store.dispatch(sendMessageActionCreator(message));
  const messageTextUpdate = text => store.dispatch(messageTextUpdateActionCreator(text));

  const form = Array.isArray(selectedDialog)
    ? <SendMessage
      currentMessageText={currentMessageText}
      addMessage={sendMessage}
      messageTextUpdate={messageTextUpdate} />
    : null;

  const content = selectedDialog !== 'Select a chat to display messages...'
    ? selectedDialog.map(dialog => <p key={dialog.name}>{`${dialog.name}: ${dialog.message}`}</p> )
    : <h2>{selectedDialog}</h2>

  return (
    <CurrentDialog content={content} form={form}/>
  )
}

export default CurrentDialogContainer;
