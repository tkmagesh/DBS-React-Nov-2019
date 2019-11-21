export function addNew(bugName) {
    const newBug = { name: bugName, isClosed: false };
    const action = { type: 'ADD_NEW', payload: newBug };
    return action;
}

