import {connect} from 'react-redux';
import UsersList from '../users-list/users-list';
import {
  followUser,
  unfollowUser,
  fetchUsers,
  setUsers,
  setUsersCount,
  setCurrentPage
} from '../../Redux/users-reducer';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pagesCount: state.usersPage.pagesCount,
    currentPage: state.usersPage.currentPage,
    loading: state.usersPage.loading
  }
}

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  fetchUsers,
  setUsers,
  setUsersCount,
  setCurrentPage
})(UsersList);
