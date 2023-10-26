import React from "react";
import { FaWindowClose } from "react-icons/fa";
import "@/scss/components/studentcreatemodal.scss";
import Profile from "@/images/login-profile.png";
import Btn from "@/js/Components/Btn";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import AppContext from "@/js/Store/app-context";

function StudentCreateModal() {
    const { isStudentCreate, setIsStudentCreate } = useContext(AppContext);
    const clickHandler = () => {
        setIsStudentCreate(false);
    };
    return (
        <div className="student-modal">
            {isStudentCreate && (
                <div className="bg-student__modal d-flex flex-align-item-center flex-justify-content-center">
                    <div className="card student-create__card">
                        <div className="d-flex flex-justify-content-end">
                            <FaWindowClose
                                size={20}
                                className="close-btn__mobile__menulist"
                                onClick={clickHandler}
                            />
                        </div>
                        <div className="d-flex flex-direction-column student-form__card flex-align-item-center">
                            <h2>Student Registration</h2>
                            <div className="img-add_button">
                                <img
                                    src={Profile}
                                    alt="Student Profile Photo"
                                    className="rounded-pill"
                                />
                                <Btn className="rounded-pill add-student__btn_color">
                                    <FaPlus size={10} />
                                </Btn>
                            </div>

                            <label htmlFor="">Name</label>
                            <input type="text" />
                            <label htmlFor="">Email</label>
                            <input type="email" />
                            <label htmlFor="">Phone</label>
                            <input type="text" />
                            <div className="d-flex create-student__modal__btn">
                              <Btn className="student-create__cancel text-white">Cancel</Btn>
                              <Btn className="student-create__save__btn">Create</Btn>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default StudentCreateModal;
