import React from 'react';
import {messageTextUpdateActionCreator, selectDialogActionCreator, sendMessageActionCreator} from '../../Redux/messenger-reducer';
import Dialogs from '../dialogs-list/dialogs';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    messenger: state.messenger
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectDialog: name => dispatch(selectDialogActionCreator(name)),
    sendMessage: message => dispatch(sendMessageActionCreator(message)),
    messageTextUpdate: text => dispatch(messageTextUpdateActionCreator(text))
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
