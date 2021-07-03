import React from 'react';
import axios from 'axios';
import User from '../User/User';
import Pagination from '../Pagination/Pagination';

const UsersList = (props) => {
  const {followUser, unFollowUser, fetchUsers, setUsers, setUsersCount,
    setCurrentPage, users, pagesCount, currentPage, loading} = props;

  const onPageChange = (pageNumber = 1) => {
    fetchUsers();

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=100&page=${pageNumber}`)
      .then((response) => {
        setUsers(response.data.items);
        setUsersCount(response.data.totalCount);
        setCurrentPage(pageNumber);
      })
      .catch((error) => console.log('Can\'t recieve data from server. Please check your Internet connection...'))
  }

  React.useEffect(() => {
    onPageChange();
  }, []);

  const pages = [];
  for (let page = 1; page <= pagesCount; page++) {
    pages.push(page);
  }

  return (
    <>
      <Pagination pages={pages} currentPage={currentPage} onPageChange={onPageChange}/>
      <User followUser={followUser} unFollowUser={unFollowUser} users={users} loading={loading}/>
    </>
  )
}

export default UsersList;
