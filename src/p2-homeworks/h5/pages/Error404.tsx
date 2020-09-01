import React from "react";
import s from "./Error404.module.css"

function Error404() {
    return (
        <div className={s.body}>
            <div className={s.errorNumber}>404</div>
            <div className={s.textError}>Page not found!</div>
            <div className={s.errorCat}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
