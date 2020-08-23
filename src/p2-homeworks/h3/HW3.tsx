import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import { v1 } from "uuid";
import s from "./Greeting.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback = (name: string) => {
        const newUser: UserType = {_id: v1(), name: name}
        setUsers([newUser, ...users]);
    }

    return (
        <div className={s.body}>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
