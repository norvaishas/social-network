import React from 'react';
const SendMessage = ({ currentMessageText, addMessage, messageTextUpdate }) => {

  const changeMessageText = (e) => {
    const currentText = e.target.value;
    messageTextUpdate(currentText);
  }

  const sendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      name: 'Sergio',
      message: currentMessageText,
      time: new Date().getSeconds()
    }
    addMessage(newMessage);
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
