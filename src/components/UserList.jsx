import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../users/usersSlice';

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="status">
        <div className="spinner"></div>
        <p>Yuklanmoqda...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status">
        <div className="error-box">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="user-list-wrapper">
      <h2>Foydalanuvchilar <span className="count">{users.length}</span></h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-card">
            <div className="avatar">{user.name.charAt(0)}</div>
            <div className="user-info">
              <span className="name">{user.name}</span>
              <span className="email">{user.email}</span>
              <span className="extra"> {user.phone}</span>
              <span className="extra"> {user.username}</span>
              <span className="extra"> {user.website}</span>
              <span className="extra">{user.address.city}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;