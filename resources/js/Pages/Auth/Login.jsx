import OTechniqueLogo1 from "@/../public/images/o-technique-logo-1.png";
import SchoolManagementImage from "@/../public/images/school-management-image.png";
import "@/scss/pages/auth/login.scss";
import "@/scss/components/form/form.scss";
import { Head, useForm } from "@inertiajs/react";
import TextInput from "@/js/Components/Form/TextInput";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    function submit(e) {
        e.preventDefault();
        post("/login");
    }

    return (
        <div>
            <Head title="Sign In" />
            <div className="card login_card">
                <img src={OTechniqueLogo1} className="mobile_login_logo" />
                <div className="login_card__left">
                    <div className="login_logo">
                        <img src={OTechniqueLogo1} />
                    </div>
                    <div className="login_image">
                        <img src={SchoolManagementImage} alt="" />
                    </div>
                </div>
                <div className="login_card__right">
                    <div className="login_title">
                        <div className="main_title">
                            School Managment System
                        </div>
                        <div className="sub_title">Admin Panel Sign In</div>
                    </div>
                    <form onSubmit={submit} className="login_form">
                        <div className="form_group">
                            <label htmlFor="email" className="form_label">
                                Email
                            </label>
                            <TextInput
                                name="email"
                                type="text"
                                placeholder="example@gmail.com"
                                inputClass="w-100"
                                value={data.value}
                                onChange={(e) => {
                                    setData("email", e.target.value);
                                }}
                                errors={errors}
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="password" className="form_label">
                                Password
                            </label>
                            <TextInput
                                name="password"
                                type="password"
                                placeholder="********"
                                inputClass="w-100"
                                value={data.value}
                                onChange={(e) => {
                                    setData("password", e.target.value);
                                }}
                                errors={errors}
                            />
                        </div>
                        <button
                            className="w-100 btn_blue btn_login"
                            disabled={processing}
                            type="submit"
                        >
                            Sign In
                        </button>
                        <div className="login_remember_me">
                            <input type="checkbox" name="" id="" />{" "}
                            <span>Remember Me</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
