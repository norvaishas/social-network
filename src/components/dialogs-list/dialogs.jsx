import React from 'react';
import style from './dialogs-list.module.css';
import Chat from '../chat/chat';
import DialogsList from './dialogs-list';

const Dialogs = ({messenger, selectDialog, sendMessage, messageTextUpdate}) => {
  const { selectedDialog, currentMessageText } = messenger;

  return (
    <div className={style.dialogsWrapper}>
      <DialogsList
        messenger={messenger}
        selectDialog={selectDialog}
      />
      <Chat
        selectedDialog={selectedDialog}
        currentMessageText={currentMessageText}
        sendMessage={sendMessage}
        messageTextUpdate={messageTextUpdate}
      />
    </div>
  )
}

export default Dialogs;
