import React from "react";
import s from "./JuniorPlus.module.css"

function JuniorPlus() {
    return (
        <div className={s.body}>
            <div className={s.video}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/HHOAgEWoq8Q" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </div>
    );
}

export default JuniorPlus