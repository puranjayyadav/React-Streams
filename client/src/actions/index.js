import stream from "../apis/stream";
import { SIGN_IN,SIGN_OUT } from "./types";

export const signIn =(userId)=>{
    return {
        type: SIGN_IN,
        payload:userId
    };
};

export const signOut =()=>{
    return {
        type: SIGN_OUT
    };
};

//Going to be called with all the value that we submitted in the form along with arguements
export const createStream =formValues => async dispatch =>{
    stream.post('/streams',formValues);
};
