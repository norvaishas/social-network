import React from 'react';
import style from './current-dialog.module.css'
import SendMessage from '../send-message/send-message';

const CurrentDialog = ({selectedDialog, currentMessageText, dispatch}) => {
  console.log(selectedDialog);
  const form = Array.isArray(selectedDialog)
    ? <SendMessage currentMessageText={currentMessageText} dispatch={dispatch}/>
    : null;

  const content = selectedDialog !== 'Select a chat to display messages...'
    ? selectedDialog.map(dialog => {
      return <p key={dialog.name}>{`${dialog.name}: ${dialog.message}`}</p>
    })
    : <h2>{selectedDialog}</h2>

  return (
    <div className={style.chat}>
      {content}
      {form}
    </div>
  )
}

export default CurrentDialog;
