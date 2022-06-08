import styles from "./index.module.css";
import SubmitButton from "../UI/SubmitButton/index";
import Input from "../UI/Input/index";
import PasswordInput from "../UI/PasswordInput/index";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import login from "../../api/login";
import { useState } from 'react'
import Warning from "../UI/Warning/index";

const LoginForm = () => {
    const [warning, setWarning] = useState(false)
    const [response, setResponse] = useState()
    let navigate = useNavigate();

    const onSuccess = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        // FIXME: Fix navigate after login user in
        navigate("/home");
        window.location.reload(false);
    };

    const onFailure = (response) => {
        if (response) {
            setResponse(response.detail)
        } else {
            setResponse('Oops... Something went wrong!')
        }
        setWarning(true)
    };

    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        login({ email, password, onSuccess, onFailure });
    };
    return (
        <div className={styles.container}>
            <h2 className={styles["form-title"]}>Log-in</h2>
            <form
                className={styles.AuthForm}
                action="get"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div
                    className={styles.inputs}
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            required: "⚠️ : The email field is required!",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "⚠️ : Email isn't valid!",
                            },
                        }}
                        render={({ field: { onChange } }) => (
                            <Input
                                type="text"
                                onChange={onChange}
                                placeholder="Email..."
                                autoFocus
                            />
                        )}
                    />
                    {errors?.email && (
                        <p className="text-left ml-4 mr-4 -mt-2 text-white">
                            {errors.email.message}
                        </p>
                    )}
                    <Controller
                        control={control}
                        name="password"
                        rules={{
                            required: "⚠️ : The password field is required!",
                            minLength: {
                                value: 8,
                                message:
                                    "⚠️ : Password can't be less than 8 characters!",
                            },
                        }}
                        render={({ field: { onChange } }) => (
                            <PasswordInput
                                onChange={onChange}
                                placeholder="Password..."
                                name="password"
                            />
                        )}
                    />
                    {errors?.password && (
                        <p className="text-left ml-4 mr-4 -mt-2 text-white">
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <SubmitButton
                    style={{
                        marginTop: "100px",
                        width: "100%",
                        marginBottom: "15px",
                    }}
                    text="Submit"
                />
            </form>
            <NavLink
                className="text-gray-300 underline text-sm hover:text-white"
                to="/register"
            >
                Don't have an account? Sign-in
            </NavLink>
            <Warning className={`absolute bottom-0 translate-y-[75%] w-[100%] ${warning ? 'active' : ''}`}>{response}</Warning>
        </div>
    );
};

export default LoginForm;
