const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

export const followUser = userId => ({type: FOLLOW_USER, payload: userId});
export const unfollowUser = userId => ({type: UNFOLLOW_USER, payload: userId});
export const fetchUsers = () => ({type: FETCH_USERS_REQUEST});
export const setUsers = users => ({type: FETCH_USERS_SUCCESS, payload: users});
export const setUsersCount = usersCount => ({type: SET_USERS_COUNT, payload: usersCount});
export const setCurrentPage = pageNumber => ({type: SET_CURRENT_PAGE, payload: pageNumber});


const initialState = {
  users: [],
  pageSize: 100,
  currentPage: 1,
  loading: true,
  error: false
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

    case SET_USERS_COUNT:
      return {
        ...state,
        usersCount: action.payload,
        pagesCount: Math.ceil(action.payload / state.pageSize)
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }

    case FETCH_USERS_REQUEST:
      return {
        ...state,
        /*users: [],*/ // проверить поведение с и без (с - при запросе очищаться список, а что будет без?)
        loading: true,
        error: false
      }

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: false
      }

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }

    default:
      return state;
  }
}

export default usersReducer;
