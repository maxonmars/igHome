import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import s from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    };
    const setHigh = () => {
        props.setFilter("high")
    };
    const setMiddle = () => {
        props.setFilter("middle")
    };
    const setLow = () => {
        props.setFilter("low")
    };

    return (
        <div className={s.todo}>
            <ul className={s.affairs}>{mappedAffairs}</ul>
            {/*<button className={s.myButton} onClick={setAll}>All</button>*/}
            {/*<button className={s.myButton} onClick={setHigh}>High</button>*/}
            {/*<button className={s.myButton} onClick={setMiddle}>Middle</button>*/}
            {/*<button className={s.myButton} onClick={setLow}>Low</button>*/}
            <div className={s.controlPanel}><SuperButton onClick={setAll}>All</SuperButton>
                <SuperButton onClick={setHigh}>High</SuperButton>
                <SuperButton onClick={setMiddle}>Middle</SuperButton>
                <SuperButton onClick={setLow}>Low</SuperButton></div>
        </div>
    );
}

export default Affairs;
