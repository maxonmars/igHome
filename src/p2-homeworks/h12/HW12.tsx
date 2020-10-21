import React from "react";
import s from "./HW12.module.css";
import {SuperRadio} from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector((state: AppStoreType) => state.theme.theme)
    console.log('Class: HW12, Function: HW12, Line: 12 theme(type string):', theme);

    const dispatch = useDispatch()

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + `-text`]}>
                homeworks 12
            </span>
            <SuperRadio name={"radio"}
                        options={themes}
                        value={theme}
                        onChangeOption={onChangeCallback}
            />
            <hr/>
        </div>
    );
}

export default HW12;
