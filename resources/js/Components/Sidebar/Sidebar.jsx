import React from "react";
import "@/scss/components/Sidebar/Sidebar.scss";
import SideBarLogo from "@/images/sidebar-logo.png";
import Profile from "@/images/login-profile.png";
import { IoPeopleSharp } from "react-icons/io5";
import { FaRightFromBracket } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <div className="destop-sidebar">
            <div className="sidebar_container d-flex flex-direction-column flex-align-item-center">
                <img src={SideBarLogo} alt="" className="sidebar-logo__img" />
                <ul className="tab-menu__sidebar">
                    <li className="d-flex flex-direction-column flex-align-item-center active">
                        <IoPeopleSharp size={24} color="#0093EB" />
                        <p className="text_white active-font__sidebar">Students</p>
                    </li>
                </ul>
                <ul className="d-flex flex-direction-column flex-align-item-center sidebar-profile__logout">
                    <li>
                        <img src={Profile} alt="" className="rounded-pill" />
                    </li>
                    <li>
                        <FaRightFromBracket size={20} color="white" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
