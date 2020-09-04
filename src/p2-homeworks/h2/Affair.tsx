import React from "react";
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperEditableSpan from "../h6/common/c4-SuperEditableSpan/SuperEditableSpan";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id: number) => void
    id: number
    changeAffairTitle: (id: number, text: string) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };

    const onTitleChangeHandler = (text: string) => {
        props.changeAffairTitle(props.id, text);
    }

    return (
        <div>
            <li className={s.affair}>
                <SuperEditableSpan
                    value={props.affair.name}
                                   onChangeText={onTitleChangeHandler}
                                   spanProps={{children: props.affair.name ? undefined : "enter text..."}}/>
                {/*<div className={s.affairPriorityWrapper}>*/}

                {/*    <span className={s.affairName}>{props.affair.name}<sup className={s.priority}>{props.affair.priority}</sup></span>*/}
                {/*</div>*/}
                <SuperButton className={s.btn} onClick={deleteCallback}>X</SuperButton>
            </li>
        </div>
    );
}

export default Affair;
