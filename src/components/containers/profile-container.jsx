import {connect} from 'react-redux';
import ProfileAPI from '../Profile/ProfileAPI';
import {clearUserProfile, setUserProfile} from '../../Redux/profile-reducer';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    posts: state.wall.posts,
    profile: state.profile
  }
}

const WithUrlDataProfileAPI = withRouter(ProfileAPI);

export default connect(mapStateToProps, {setUserProfile, clearUserProfile})(WithUrlDataProfileAPI);
