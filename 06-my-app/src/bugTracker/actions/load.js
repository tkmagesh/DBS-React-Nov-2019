/*
import axios from 'axios';

export function load(){
    return function(dispatch){
        var p = axios.get('http://localhost:3030/bugs');
        var p2 = p.then(function(response){
            return response.data;
        });
        p2.then(function(bugs){
            let action = { type: 'LOAD', payload: bugs};
            dispatch(action);
        });

    }
} */

import bugApi from '../services/bugApi';

/* export function load(){
    return function(dispatch){
        bugApi
            .getAll()
            .then( bugs => {
                let action = { type: 'LOAD', payload: bugs };
                dispatch(action);
            });
        
    }
}
 */
export function load() {
    return async function (dispatch) {
        const bugs = await bugApi.getAll();
        let action = { type: 'LOAD', payload: bugs };
        dispatch(action);
    }
}