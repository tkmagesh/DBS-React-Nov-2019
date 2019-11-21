function bugsReducer(currentState = [], action) {
    if (action.type === 'ADD_NEW') {
        return [...currentState, action.payload];
    }
    if (action.type === 'REPLACE') {
        const { oldBug, newBug } = action.payload;
        return currentState.map(bug => bug === oldBug ? newBug : bug);
    }
    if (action.type === 'REMOVE_MANY') {
        const bugsToRemove = action.payload;
        return currentState.filter(bug => bugsToRemove.indexOf(bug) === -1);
    }
    return currentState;
}

export default bugsReducer;