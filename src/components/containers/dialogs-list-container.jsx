import React from 'react';
import style from '../dialogs-list/dialogs-list.module.css';
import DialogsListItem from '../dialogs-list-item/dialogs-list-item';
import {
  messageTextUpdateActionCreator,
  selectDialogActionCreator,
  sendMessageActionCreator
} from '../../Redux/messenger-reducer';
import DialogsList from '../dialogs-list/dialogs-list';
import StoreContext from '../../store-context';

const DialogsListContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const messenger = store.getState().messenger;
          const { dialogs, selectedDialog, currentMessageText } = messenger;
          const lastMessages = dialogs.map(dialog => dialog.messages[0]);

          const selectDialog = name => store.dispatch(selectDialogActionCreator(name));
          const sendMessage = message => store.dispatch(sendMessageActionCreator(message));
          const messageTextUpdate = text => store.dispatch(messageTextUpdateActionCreator(text));

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
              <DialogsList
                selectedDialog={selectedDialog}
                currentMessageText={currentMessageText}
                sendMessage={sendMessage}
                messageTextUpdate={messageTextUpdate}
              />
            </div>
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default DialogsListContainer;
