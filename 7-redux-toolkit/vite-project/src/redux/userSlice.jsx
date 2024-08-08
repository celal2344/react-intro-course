import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
    loading: false
}

export const getAllUsers = createAsyncThunk(
    "users",
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //http isteği yoksa
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled, (state, action) => {//request başarılı olursa dönen response u initial state içerisine gir
            state.users = action.payload
        })
    }

})
export const { } = userSlice.actions//sadece reducers
export default userSlice.reducer  