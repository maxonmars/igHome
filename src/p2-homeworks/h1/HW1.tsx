import React from "react";
import Message from "./Message";
import s from "./Message.module.css"
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "some text",
    time: "22:00",
};

const altMessageData = {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPsV0Gjy9q6uTSI_pO3o7SivkvMnNFmZj5ow&usqp=CAU",
    name: "Maxim",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    time: "22:12",
}

export interface MessageType {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function HW1() {
    return (
        <div className={s.message}>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
            avatar={altMessageData.avatar}
            name={altMessageData.name}
            message={altMessageData.message}
            time={altMessageData.time}
            />
            <hr/>
        </div>
    );
}

export default HW1;
