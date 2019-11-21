export function toggle(bugToToggle) {
    let toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
    const action = { type: 'REPLACE', payload: { oldBug: bugToToggle, newBug: toggledBug } };
    return action;
}