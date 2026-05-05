import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchAll', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data; 
});

const usersSlice = createSlice({
  name: 'users',

  initialState: {
    list: [],        
    loading: false,  
    error: null,     
  },

  reducers: {
    addPost: (state, action) => {
      state.list.unshift(action.payload); 
    },
  }, 

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload; 
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addPost } = usersSlice.actions; 
export default usersSlice.reducer;