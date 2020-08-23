import React from "react";
import Message from "./Message";
import s from "./Message.module.css"
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: "https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000004/1553541605000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000",
    name: "Morty",
    message: "What are you talking about?",
    time: "22:00",
};

const altMessageData = {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPsV0Gjy9q6uTSI_pO3o7SivkvMnNFmZj5ow&usqp=CAU",
    name: "Rick",
    message: "I turned myself into a pickle. I'm Pickle Riiiiick!",
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
