import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import {PATH} from "./Routes";

function Header() {
    return (
        <div>
            <nav className={s.navBar}>
                <ul className={s.navBarNav}>
                    <li className={s.logo}>
                        <NavLink className={s.navLink} to={"/"}>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="sign-in-alt"
                                className="svg-inline--fa fa-sign-in-alt fa-w-16"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                      className={s.arrow}
                                      d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"></path>
                            </svg>
                            <span className={s.linkText}>Samurai</span></NavLink>
                    </li>
                    <li className={s.navItem}>
                        <NavLink activeClassName={s.navActive} className={s.navLink} to={PATH.PRE_JUNIOR}>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="user-injured"
                                className="svg-inline--fa fa-user-injured fa-w-14"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path fill="currentColor"
                                      className={s.svgColor}
                                      d="M277.37 11.98C261.08 4.47 243.11 0 224 0c-53.69 0-99.5 33.13-118.51 80h81.19l90.69-68.02zM342.51 80c-7.9-19.47-20.67-36.2-36.49-49.52L239.99 80h102.52zM224 256c70.69 0 128-57.31 128-128 0-5.48-.95-10.7-1.61-16H97.61c-.67 5.3-1.61 10.52-1.61 16 0 70.69 57.31 128 128 128zM80 299.7V512h128.26l-98.45-221.52A132.835 132.835 0 0 0 80 299.7zM0 464c0 26.51 21.49 48 48 48V320.24C18.88 344.89 0 381.26 0 422.4V464zm256-48h-55.38l42.67 96H256c26.47 0 48-21.53 48-48s-21.53-48-48-48zm57.6-128h-16.71c-22.24 10.18-46.88 16-72.89 16s-50.65-5.82-72.89-16h-7.37l42.67 96H256c44.11 0 80 35.89 80 80 0 18.08-6.26 34.59-16.41 48H400c26.51 0 48-21.49 48-48v-41.6c0-74.23-60.17-134.4-134.4-134.4z"></path>
                            </svg>
                            <span className={s.linkText}>PreJunior</span></NavLink>
                    </li>
                    <li className={s.navItem}>
                        <NavLink activeClassName={s.navActive} className={s.navLink} to={PATH.JUNIOR_PLUS}>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="user-nurse"
                                className="svg-inline--fa fa-user-nurse fa-w-14"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path fill="currentColor"
                                      className={s.svgColor}
                                      d="M319.41,320,224,415.39,128.59,320C57.1,323.1,0,381.6,0,453.79A58.21,58.21,0,0,0,58.21,512H389.79A58.21,58.21,0,0,0,448,453.79C448,381.6,390.9,323.1,319.41,320ZM224,304A128,128,0,0,0,352,176V65.82a32,32,0,0,0-20.76-30L246.47,4.07a64,64,0,0,0-44.94,0L116.76,35.86A32,32,0,0,0,96,65.82V176A128,128,0,0,0,224,304ZM184,71.67a5,5,0,0,1,5-5h21.67V45a5,5,0,0,1,5-5h16.66a5,5,0,0,1,5,5V66.67H259a5,5,0,0,1,5,5V88.33a5,5,0,0,1-5,5H237.33V115a5,5,0,0,1-5,5H215.67a5,5,0,0,1-5-5V93.33H189a5,5,0,0,1-5-5ZM144,160H304v16a80,80,0,0,1-160,0Z"></path>
                            </svg>
                            <span className={s.linkText}>JuniorPlus</span></NavLink>
                    </li>
                    <li className={s.navItem}>
                        <NavLink activeClassName={s.navActive} className={s.navLink} to={PATH.SAMURAI_JUN}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-ninja"
                                 className="svg-inline--fa fa-user-ninja fa-w-14" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                      className={s.svgColor}
                                      d="M325.4 289.2L224 390.6 122.6 289.2C54 295.3 0 352.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-70.2-54-127.1-122.6-133.2zM32 192c27.3 0 51.8-11.5 69.2-29.7 15.1 53.9 64 93.7 122.8 93.7 70.7 0 128-57.3 128-128S294.7 0 224 0c-50.4 0-93.6 29.4-114.5 71.8C92.1 47.8 64 32 32 32c0 33.4 17.1 62.8 43.1 80-26 17.2-43.1 46.6-43.1 80zm144-96h96c17.7 0 32 14.3 32 32H144c0-17.7 14.3-32 32-32z"></path>
                            </svg>
                            <span className={s.linkText}>SamuraiJun</span></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
