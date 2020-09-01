import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import JuniorPlus from "./pages/JuniorPlus";
import Error404 from "./pages/Error404";
import SamuraiJun from "./pages/SamuraiJun";

export const PATH = {
    PRE_JUNIOR: "/pages/PreJunior",
    JUNIOR_PLUS: "/pages/JuniorPlus",
    SAMURAI_JUN: "/pages/SamuraiJun"
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>

                <Route path={PATH.JUNIOR_PLUS} render={()=> <JuniorPlus/>}/>

                <Route path={PATH.SAMURAI_JUN} render={()=> <SamuraiJun/>}/>

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
