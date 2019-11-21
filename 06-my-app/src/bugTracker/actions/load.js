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
}