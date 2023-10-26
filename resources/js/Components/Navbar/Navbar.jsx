import { useState } from "react";
import "@/scss/components/Navbar/Navbar.scss";
import Btn from "@/js/Components/Btn";
import DesktopNavLeftTitle from "@/js/Components/Navbar/DesktopNavLeftTitle";
import MenuTab from "@/js/Components/MenuTab";
import { useContext } from "react";
import AppContext from "@/js/Store/app-context";

import { FaBars, FaPlus } from "react-icons/fa";

const Navbar = () => {
    const { menulist, setMenulist } = useContext(AppContext);
    const { isStudentCreate, setIsStudentCreate} = useContext(AppContext);
    const handleClick = () => {
        setMenulist(true);
    };

    const clickHandler = () => {
        setIsStudentCreate(true);
    }
    return (
        <div className="mobile-nav">
            <div className="nav_container shadow-2 d-flex flex-justify-content-space-between">
                <div className="mobile-nav__leftmenu d-flex flex-align-item-center">
                    <FaBars size={15} onClick={handleClick} />
                    <h2>Student</h2>
                </div>
                <DesktopNavLeftTitle
                    routeTitle="Student"
                    routeTitleList="Student List"
                    mainTitle="Student List"
                />
                <div className="d-flex flex-align-item-center">
                    <Btn className="add-student__btn add-student__btn_color desktop-student desktop-add__btn__layout" onClick={clickHandler}>
                        <FaPlus />
                        Add Student
                    </Btn>
                    <Btn className="add-student__btn add-student__btn_color mobile-student">
                        <FaPlus size={16}/>
                    </Btn>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
