import React from 'react';
import style from './dialogs-list.module.css';
import DialogsListItem from '../dialogs-list-item/dialogs-list-item';

const DialogsList = ({messenger, selectDialog}) => {

  const { dialogs } = messenger;
  const lastMessages = dialogs.map(dialog => dialog.messages[0]);

  return (
    <ul className={style.dialogsList}>
      {lastMessages.map(lastMessage => {
        return (
          <DialogsListItem
            key={lastMessage.time}
            lastMessage={lastMessage}
            selectDialog={selectDialog}
          />
        )
      })}
    </ul>
  )
}

export default DialogsList;
