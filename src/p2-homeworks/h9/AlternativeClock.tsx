import React, {useState} from "react";
import s from './murr.module.css'

function AlternativeClock() {

    let [color, setColor] = useState()

    const onChangeColor = () => {
        const colorOnHover = `rgb(${Math.floor(Math.random() * (220 - 50) + 50)},${Math.floor(Math.random() * (220 - 50) + 50)},${Math.floor(Math.random() * (220 - 50) + 50)}`
        setColor(colorOnHover)
    }

    return (
        <div style={{'backgroundColor': color}} className={s.block}>
            <img onMouseOver={onChangeColor} src={require("./pngegg.png")} alt="cyberpunk"
                 style={{width: "20%", height: "20%"}}/>

        </div>
    );
}

export default AlternativeClock;
