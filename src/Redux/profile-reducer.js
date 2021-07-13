const SET_USER_PROFILE = 'SET_USER_PROFILE';
const CLR_USER_PROFILE = 'CLR_USER_PROFILE';

export const setUserProfile = (userId) => ({type: SET_USER_PROFILE, payload: userId});
export const clearUserProfile = () => ({type: CLR_USER_PROFILE});

const initialState = null;

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {...action.payload};

    case CLR_USER_PROFILE:
      console.log('Очистка данных профиля')
      return null;

    default:
      return state;
  }
}

export default profileReducer;
