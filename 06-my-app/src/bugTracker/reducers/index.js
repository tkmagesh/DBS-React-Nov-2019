function bugsReducer(currentState = [], action) {
    if (action.type === 'ADD_NEW') {
        return [...currentState, action.payload];
    }
    /* if (action.type === 'REPLACE') {
        const { oldBug, newBug } = action.payload;
        return currentState.map(bug => bug === oldBug ? newBug : bug);
    } */
    if (action.type === 'REPLACE') {
        return currentState.map(bug => bug.id === action.payload.id ? action.payload : bug);
    } 
    if (action.type === 'REMOVE_MANY') {
        const bugsToRemove = action.payload;
        return currentState.filter(bug => bugsToRemove.indexOf(bug) === -1);
    }
    if (action.type === 'REMOVE') {
        const bugToRemove = action.payload;
        return currentState.filter(bug => bug.id !== bugToRemove.id);
    }
    if (action.type === 'LOAD'){
        return action.payload;
    }
    return currentState;
}

export default bugsReducer;