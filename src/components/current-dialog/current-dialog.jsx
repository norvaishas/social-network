import React from 'react';
import style from './current-dialog.module.css'

const CurrentDialog = ({selectedDialog}) => {
  let content;

  if (selectedDialog[0] !== 'Select a chat to display messages...') {
    content = selectedDialog.map(elem => {
      return <p key={elem.name}>{`${elem.name}: ${elem.message}`}</p>
    })
  } else {
    content = <h2>Select a chat to display messages...</h2>
  }

  return (
    <div className={style.chat}>
      {content}
    </div>
  )
}

export default CurrentDialog;
