export type InitialState = typeof initState
type LoadingACType = ReturnType<typeof loadingAC>
type ActionTypes = LoadingACType

const initState = {
    isLoading: false
};

export const loadingReducer = (state = initState, action: ActionTypes): InitialState => { // fix any
    switch (action.type) {
        case "LOADING": {
            return {...state, isLoading: action.isLoading};
        }
        default:
            return state;
    }
};

export const loadingAC = (isLoading: boolean) => {
    return {
        type: "LOADING",
        isLoading
    } as const

}; // fix any