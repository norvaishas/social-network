import {connect} from 'react-redux';
import UsersList from '../users-list/users-list';
import {followUserAC, unfollowUserAC} from '../../Redux/users-reducer';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: userId => dispatch(followUserAC(userId)),
    unFollowUser: userId => dispatch(unfollowUserAC(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
