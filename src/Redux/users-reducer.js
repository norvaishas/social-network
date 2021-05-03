const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';

export const followUserAC = userId => ({type: FOLLOW_USER, payload: userId});
export const unfollowUserAC = userId => ({type: UNFOLLOW_USER, payload: userId});

const initialState = {
  users: [
    {id: 1, selected: false, followed: false, login: '@puyol5', name: 'Carles'},
    {id: 2, selected: false, followed: false, login: '@world', name: 'Universe'},
    {id: 3, selected: false, followed: true, login: '@ilon_mask', name: 'Ilon'},
    {id: 4, selected: false, followed: false, login: '@google', name: 'HR-Google'},
    {id: 5, selected: false, followed: true, login: '@user23', name: 'User-23'},
    {id: 6, selected: false, followed: false, login: '@fathi_fcb', name: 'Fathi'},
    {id: 7, selected: false, followed: true, login: '@merinda', name: 'Merissa'},
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      // Обновление (редактирование) элементов
      return {
        ...state,
        users: [...state.users].map( user => {
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

    default:
      return state;
  }
}

export default usersReducer;
