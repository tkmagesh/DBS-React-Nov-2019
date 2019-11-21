import bugApi from '../services/bugApi';


export function toggle(bugToToggle) {
    //in memory
    /* let toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
    const action = { type: 'REPLACE', payload: { oldBug: bugToToggle, newBug: toggledBug } };
    return action; */

    //server communicaiton
    return async function(dispatch){
        let toggledBugData = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
        let toggledBug = await bugApi.save(toggledBugData);
        const action = { type: 'REPLACE', payload: toggledBug };
        dispatch(action);
    }
}