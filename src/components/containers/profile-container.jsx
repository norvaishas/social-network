import Profile from '../Profile/Profile';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.wall.posts
  }
}

const ProfileContainer = connect(mapStateToProps)(Profile)

export default ProfileContainer;
