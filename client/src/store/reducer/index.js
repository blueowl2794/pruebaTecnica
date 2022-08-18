import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const reduceSlice = createSlice({
    name: "info",

    initialState: {
        infos: [],
    },
    reducers: {
        setInfo:(state,action) => {
            
            state.infos = action.payload;  
        }
    },
});

export const { setInfo } = reduceSlice.actions;
export default reduceSlice.reducer;

export const getInfo = () => (dispatch) => {

    const config = {
        headers: { Authorization: `Bearer ${localStorage.token}` }
    };
      
    axios.get( 
    'http://localhost:3000/content',
    config
    ).then((c)=>{
        console.log("soy c" , c)
        dispatch(setInfo(c.data));
    }).catch((err)=>{
        console.error(err);
    });
    
}