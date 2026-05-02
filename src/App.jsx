import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import UserList from './components/UserList';
import './App.css';
 

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>RTK User Explorer</h1>
        <UserList />
      </div>
    </Provider>
  );
}
 
export default App;