const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const DELETE_USERS = 'DELETE_USERS:';

export const followUserAC = userId => ({type: FOLLOW_USER, payload: userId});
export const unfollowUserAC = userId => ({type: UNFOLLOW_USER, payload: userId});
export const setUsersAC = users => ({type: SET_USERS, payload: users});
export const deleteUsersAC = users => ({type: DELETE_USERS, payload: users});

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      // Обновление (редактирование) элементов
      return {
        ...state,
        users: state.users.map( user => {
          if (user.id === action.payload) {
            return {...user, followed: true}
          }
          return user;
        })
      };

    case UNFOLLOW_USER:
      // Обновление (редактирование) элементов другим способом
      const updatedUserIdx = state.users.findIndex(user => user.id === action.payload);
      const updatedUser = state.users[updatedUserIdx];
      return {
        ...state,
        users: [
          ...state.users.slice(0, updatedUserIdx),
          {...updatedUser, followed: !updatedUser.followed},
          ...state.users.slice(updatedUserIdx + 1)
        ]
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload]
      }

    case DELETE_USERS:
      console.log('Пользователи очищены')
      return {
        ...state,
        users: []
      }

    default:
      return state;
  }
}

export default usersReducer;
