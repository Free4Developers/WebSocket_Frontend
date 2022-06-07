import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialAuthState = {
    acessToken: ''
};

const authSlice = createSlice({
    name:'auth',
    initialState: initialAuthState,
    reducers:{
        login(state, action){
            console.log('store 토큰 등록',action.payload)
            state.acessToken =  action.payload;
        },
        logout(state){
            state.acessToken = '';
        }
    }
});


export const authActions = authSlice.actions;
export default authSlice.reducer;