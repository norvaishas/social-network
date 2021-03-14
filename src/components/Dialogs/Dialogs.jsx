import React from 'react';
import style from './Dialogs.module.css';
import CurrentDialog from '../current-dialog/current-dialog';
import {selectDialogActionCreator} from '../../Redux/messenger-reducer';

const DialogItem = ({ lastMessage, dispatch }) => {

  const onDialogSelected = (e, name) => {
    if (e.target.innerText === name) {
      dispatch(selectDialogActionCreator(name));
    }
  }

  // const path = `/dialogs/${lastMessage.name}`;

  return (
    <li className={style.lastMessage} onClick={(e) => onDialogSelected(e, lastMessage.name)}>
      {/*<NavLink to={path}>*/}
        <div className={style.lastMessageHeader}>
          <div>{lastMessage.name}</div>
          <div className={style.lastMessageTime}>{lastMessage.time}</div>
        </div>
        <div className={style.lastMessageContent}>{lastMessage.message}</div>
      {/*</NavLink>*/}
    </li>
  )
}

const Dialogs = ({ lastMessages, selectedDialog, dispatch, currentMessageText }) => {
  return (
    <div className={style.dialogsWrapper}>

      <ul className={style.dialogsList}>
        {lastMessages.map( lastMessage => <DialogItem lastMessage={lastMessage} key={lastMessage.time} dispatch={dispatch}/>)}
      </ul>

      <CurrentDialog
        selectedDialog={selectedDialog}
        currentMessageText={currentMessageText}
        dispatch={dispatch}
      />
    </div>
  )
}

export default Dialogs;
