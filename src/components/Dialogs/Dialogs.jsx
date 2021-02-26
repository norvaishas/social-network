import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = ({ dialog }) => {
  const path = `/dialog/${dialog.name}`;
  return (
    <li className={style.lastMessage}>
      <NavLink exact to={path}>
        <div className={style.lastMessageHeader}>
          <div>{dialog.name}</div>
          <div className={style.lastMessageTime}>{dialog.time}</div>
        </div>
        <div className={style.lastMessageContent}>{dialog.message}</div>
      </NavLink>
    </li>
  )
}

const Dialogs = ({ dialogs }) => {
  return (
    <div className={style.dialogsWrapper}>

      <ul className={style.dialogsList}>
        {dialogs.map( dialog => <DialogItem dialog={dialog} key={dialog.time}/>)}
      </ul>

      <div className={style.chat}>
        Select a chat to display messages...
      </div>
    </div>
  )
}

export default Dialogs;
