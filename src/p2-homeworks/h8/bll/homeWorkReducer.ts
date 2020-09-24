import {InitialStateType} from "../HW8";

type SortActionType = {
    type: "sort"
    payload: "up" | "down"
}

type CheckActionType = {
    type: "check"
    payload: number
}

type ActionTypes = SortActionType | CheckActionType

export const homeWorkReducer = (state: InitialStateType, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "sort": {
            let inc = action.payload === "up" ? 1 : -1

            return [...state].sort(function (a, b) {
                let nameA = a.name.toLowerCase()
                let nameB = b.name.toLowerCase()

                if (nameA < nameB)
                    return -inc
                if (nameA > nameB)
                    return inc

                return 0
            })
        }
        case "check": {

            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
};