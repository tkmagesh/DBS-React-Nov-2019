export function removeClosed(bugs) {
    let closedBugs = bugs.filter(bug => bug.isClosed);
    const action = { type: 'REMOVE_MANY', payload: closedBugs };
    return action;
}