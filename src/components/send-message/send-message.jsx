import React from 'react';
import {messageTextUpdateActionCreator, sendMessageActionCreator} from '../../Redux/messenger-reducer';

const SendMessage = ({currentMessageText, dispatch}) => {

  const changeMessageText = (e) => {
    const currentText = e.target.value;
    dispatch(messageTextUpdateActionCreator(currentText));
  }

  const sendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      name: 'Sergio',
      message: currentMessageText,
      time: new Date().getSeconds()
    }
    dispatch(sendMessageActionCreator(newMessage));
  }

  const onCtrlEnterPress = (e) => {
    if (e.ctrlKey && e.keyCode === 13) {
      sendMessage(e)
    }
  };

  return (
    <>
      <form onSubmit={sendMessage}>
        <textarea onChange={changeMessageText} onKeyDown={onCtrlEnterPress} value={currentMessageText}/>
        <button>Отправить сообщение</button>
      </form>
    </>
  )
}

export default SendMessage;
