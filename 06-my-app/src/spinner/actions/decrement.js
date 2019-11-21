export function decrement(delta = 1) {
    let action = { type: 'DECREMENT', payload: delta };
    return action;
}