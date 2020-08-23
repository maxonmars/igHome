import React from "react";
import {MessageType} from "./HW1";
import s from "./Message.module.css"

function AlternativeMessage(props: MessageType) {
    return (
        <div className={s.Message}>
            <img className={s.avatar} src={props.avatar} alt="avatar"/>
            <div className={s.MsgCloud}>
                <h3>{props.name}</h3>
                <p>{props.message}</p>
                <time>{props.time}</time>
            </div>
        </div>
    );
}

export default AlternativeMessage;
