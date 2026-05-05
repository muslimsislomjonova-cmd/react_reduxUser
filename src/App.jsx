import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addPost } from './store/usersSlice';
import UserCard from './components/UserCard';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.users);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '' });

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleAdd = () => {
    if (!form.name.trim()) return;
    dispatch(addPost({
      id: Date.now(),
      name: form.name,
      username: '',
      email: '',
      phone: '',
      website: '',
      company: { name: '' },
      address: { city: '' }
    }));
    setForm({ name: '' });
    setShowForm(false);
  };

  return (
    <div className="page">
      <div className="header">
        <h1 className="title">
          Users App
        </h1>
        <button className="add-btn" onClick={() => setShowForm(v => !v)}>
          + Post qoshish
        </button>
      </div>

      {showForm && (
        <div className="form-card">
          <input
            className="input"
            placeholder="Ism"
            value={form.name}
            onChange={e => setForm({ name: e.target.value })}
          />
          <button className="submit-btn" onClick={handleAdd}>Qoshish</button>
        </div>
      )}

      {loading && <p className="status">Loading...</p>}
      {error   && <p className="error">Xato: {error}</p>}

      {!loading && !error && (
        <div className="grid">
          {list.map((item) => (
            <UserCard key={item.id} user={item} />
          ))}
        </div>
      )}
    </div>
  );
}