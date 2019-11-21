export function increment(delta = 1){
    let action = { type: 'INCREMENT', payload: delta };
    return action;
}

