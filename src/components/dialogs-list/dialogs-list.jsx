import React from 'react';
import style from './dialogs-list.module.css';
import DialogsListItem from '../dialogs-list-item/dialogs-list-item';
import { selectDialogActionCreator } from '../../Redux/messenger-reducer';
import CurrentDialogContainer from '../containers/current-dialog-container';

const DialogsList = ({ store }) => {
  const messenger = store.getState().messenger;
  const { dialogs } = messenger;
  const lastMessages = dialogs.map(dialog => dialog.messages[0]);

  const selectDialog = name => store.dispatch(selectDialogActionCreator(name));
  return (
    <div className={style.dialogsWrapper}>
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
      <CurrentDialogContainer store={store}/>
    </div>
  )
}

export default DialogsList;
