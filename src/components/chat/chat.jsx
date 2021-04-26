import React from 'react';
import SendMessage from '../send-message/send-message';
import CurrentDialog from '../current-dialog/current-dialog';

const Chat = ({selectedDialog, currentMessageText, messageTextUpdate, sendMessage}) => {

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

export default Chat;
