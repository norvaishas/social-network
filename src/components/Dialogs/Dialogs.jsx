import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  const path = `/dialog/${props.name}`;
  return (
    <NavLink exact to={path}>
      <li className={style.lastMessage}>
        <div className={style.lastMessageHeader}>
          <div>{props.name}</div>
          <div className={style.lastMessageTime}>{props.time}</div>
        </div>
        <div className={style.lastMessageContent}>{props.message}</div>
      </li>
    </NavLink>
  )
}

const Dialogs = () => {
  return (
    <div className={style.dialogsWrapper}>

      <ul className={style.dialogsList}>
        <DialogItem name='Sergio' message='Vamos!' time='19:39'/>
        <DialogItem name='Universe' message='All be ok :)' time='Always'/>
        <DialogItem name='Ilon' message='See u on Mars' time='11:39'/>
        <DialogItem name='HR-Google' message='Offer for Sergei...' time='Yesterday'/>
        <DialogItem name='User' message='Some text' time='29 May 23:07'/>
        <DialogItem name='User' message='Some text' time='29 May 23:07'/>
        <DialogItem name='User' message='Some text' time='29 May 23:07'/>
        <DialogItem name='User' message='Some text' time='29 May 23:07'/>
        <DialogItem name='User' message='Some text' time='29 May 23:07'/>
        <DialogItem name='User' message='Some text' time='29 May 23:07'/>
        <DialogItem name='User' message='Some text' time='29 May 23:07'/>
        <DialogItem name='User' message='Some text' time='29 May 23:07'/>
      </ul>

      <div className={style.chat}>
        Select a chat to display messages...
      </div>
    </div>
  )
}

export default Dialogs;
