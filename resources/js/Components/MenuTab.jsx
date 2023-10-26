import { useContext } from "react";
import AppContext from "@/js/Store/app-context";
import "@/scss/components/menutab.scss";
import { FaWindowClose } from "react-icons/fa";
import { createPortal } from "react-dom";

function MenuTab(props) {
    const { menulist, setMenulist } = useContext(AppContext);
    const classes = 'bg-menu__list ' + props.className;
    const clickHandler = () => {
        setMenulist(false);
    };
    return createPortal(
        <div className="menu-list">
            <div
                className={`${classes}  ${
                    menulist ? "fadeinout__effect" : ""
                }`}
            >
                <FaWindowClose
                    size={25}
                    className="close-btn__mobile__menulist"
                    onClick={clickHandler}
                />
                {props.children}
            </div>
        </div>,
        document.getElementById('modal-popup')

    );
}

export default MenuTab;
