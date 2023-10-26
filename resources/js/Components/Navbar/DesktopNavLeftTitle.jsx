import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

function DesktopNavLeftTitle({ routeTitle, routeTitleList, mainTitle }) {
    return (
        <div className="desktop-nav__leftmenu">
            <ul className="d-flex flex-direction-row flex-align-item-center nav-left__menu__margin">
                <li>
                    <AiOutlineHome size={15} />
                </li>
                <li>
                    <FiChevronRight size={15} color="#7a7a7a" />
                </li>
                <li>{routeTitle}</li>
                <li>
                    <FiChevronRight size={15} color="#7a7a7a" />
                </li>
                <li>{routeTitleList}</li>
            </ul>
            <h3 className="nav-left__title__margin">{mainTitle}</h3>
        </div>
    );
}

export default DesktopNavLeftTitle;
