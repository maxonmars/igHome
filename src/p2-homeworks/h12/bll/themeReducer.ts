type InitialStateType = {
    theme: string
}

const initState = {
    theme: "red"
};

export const themeReducer = (state = initState, action: ChangeThemeType): InitialStateType => {
    switch (action.type) {
        case "SET_THEME": {
            return {...state, theme: action.color}
        }
        default: return state;
    }
};

type ChangeThemeType = {
    type: "SET_THEME"
    color: string
}

export const changeThemeC = (color: string): ChangeThemeType => ({type: "SET_THEME", color});