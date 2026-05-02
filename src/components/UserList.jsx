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
    return <p>Loading...</p>;
  }
 
  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }
 
  return (
    <div>
      <h2>Foydalanuvchilar royxati</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
 
export default UserList;