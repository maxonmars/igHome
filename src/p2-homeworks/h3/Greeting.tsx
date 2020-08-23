import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (name: ChangeEvent<HTMLInputElement>)=> void
    addUser: ()=> void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const onPressHandler = (e: React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.charCode === 13){
            addUser()
        }
    }

    return (
        <div className={s.greeting}>
            <span className={s.counter}>{totalUsers}</span>
            <div className={s.wrapper}>
                {/*<input value={name} onChange={setNameCallback} className={inputClass}/>*/}
                <SuperInputText className={s.formField} onKeyPress={onPressHandler} error={error} value={name} onChange={setNameCallback} placeholder={"Name"}/>
                {/*<button className={s.myButton} onClick={addUser}>add</button>*/}
                <SuperButton className={s.btn} onClick={addUser}>add</SuperButton>
            </div>
                <span className={s.error}>{error}</span>
        </div>
    );
}

export default Greeting;
