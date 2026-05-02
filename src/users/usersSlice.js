import { createSlice,  createAsyncThunk } from '@reduxjs/toolkit';

export const fetchusers = createAsyncThunk('users/fetchusers', async () => {

    const   response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}
);

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {       
        builder.addCase(fetchusers.pending, (state) => {
            state.loading = true;
            state.error = null;
    })
        .addCase(fetchusers.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        }) 
        .addCase(fetchusers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default usersSlice.reducer;

