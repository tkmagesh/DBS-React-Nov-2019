import bugApi from "../services/bugApi";

export function removeClosed(bugs) {
    return function(dispatch, getState){
        let bugs = getState().bugsState;
        let closedBugs = bugs.filter(bug => bug.isClosed);
        closedBugs.forEach(async closedBug => {
            await bugApi.remove(closedBug);
            const action = { type: 'REMOVE', payload: closedBug };
            dispatch(action);    
        })
    }
}