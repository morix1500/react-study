const LOAD = "comment/LOAD"

const initialState = {
    comments: null,
}

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case LOAD:
            return {
                comments:action.comments,
            }
        default:
            return state
    }
}

export function load() {
    const comments = "hello"
    return { type: LOAD, comments}
}