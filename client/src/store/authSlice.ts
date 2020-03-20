import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    initialState: {
        isLoggedIn: boolean,
        user: {}
    }
}

export const slice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        user: {}
    },
    reducers: {
        login: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isLoggedIn = true
        },
        logout: state => {
            state.isLoggedIn = false;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { login, logout, setUser } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = (state:AuthState) => state;

export default slice.reducer;
