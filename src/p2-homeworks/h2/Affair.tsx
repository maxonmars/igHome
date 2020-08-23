import React from "react";
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };

    return (
        <div>
            <li className={s.affair}>
                <div className={s.affairPriorityWrapper}>

                    <span className={s.affairName}>{props.affair.name}<sup className={s.priority}>{props.affair.priority}</sup></span>
                </div>
                <SuperButton className={s.btn} onClick={deleteCallback}>X</SuperButton>
            </li>
        </div>
    );
}

export default Affair;
