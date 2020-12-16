
const initState = {
    count: 0
}

export default function reducer(state = initState, action) {

    switch(action.type) {
        case 'ADD':
            state.count += 1
            break;
        case 'CUT':
            state.count += 1
            break;

    }

    return { ...state }

}