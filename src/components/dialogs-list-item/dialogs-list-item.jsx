import React from 'react';
import style from './dialogs-list-item.module.css';

const DialogsListItem = ({ lastMessage, selectDialog }) => {

  const onDialogSelected = (e, name) => {
    if (e.target.innerText === name) {
      selectDialog(name);
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

export default DialogsListItem;
