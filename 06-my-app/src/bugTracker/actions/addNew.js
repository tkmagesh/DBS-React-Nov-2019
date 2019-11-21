import bugApi from '../services/bugApi';

export function addNew(bugName) {
    return async function(dispatch){
        const newBugData = { 
            id : 0, 
            name: bugName, 
            isClosed: false, 
            createdAt : new Date(), 
            desc : 'Elit Lorem excepteur dolore qui tempor ut. Nostrud dolore aliqua ipsum minim officia Lorem anim magna consequat sint qui fugiat. Officia velit culpa nulla excepteur voluptate do aliquip voluptate. Voluptate consequat consectetur exercitation duis quis irure irure.' 
        };
        let newBug = await bugApi.save(newBugData);
        const action = { type: 'ADD_NEW', payload: newBug };
        dispatch(action);
    }
}

