import React from 'react';
import style from './current-dialog.module.css'

const CurrentDialog = ({content, form}) => {
  return (
    <div className={style.chat}>
      {content}
      {form}
    </div>
  )
}

export default CurrentDialog;
