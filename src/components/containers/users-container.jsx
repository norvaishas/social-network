import {connect} from 'react-redux';
import UsersList from '../users-list/users-list';
import {
  followUserAC,
  unfollowUserAC,
  fetchUsersAC,
  setUsersAC,
  setUsersCountAC,
  setCurrentPageAC
} from '../../Redux/users-reducer';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pagesCount: state.usersPage.pagesCount,
    currentPage: state.usersPage.currentPage,
    loading: state.usersPage.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: userId => dispatch(followUserAC(userId)),
    unFollowUser: userId => dispatch(unfollowUserAC(userId)),
    fetchUsers: () => dispatch(fetchUsersAC()),
    setUsers: users => dispatch(setUsersAC(users)),
    setUsersCount: usersCount => dispatch(setUsersCountAC(usersCount)),
    setCurrentPage: pageNumber => dispatch(setCurrentPageAC(pageNumber))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
