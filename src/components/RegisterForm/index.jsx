import styles from "./index.module.css";
import SubmitButton from "../UI/SubmitButton/index";
import Input from "../UI/Input/index";
import PasswordInput from "../UI/PasswordInput/index";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import register from "../../api/register";
import Warning from "../UI/Warning/index";
import { useState } from 'react'

const RegisterForm = () => {
    const [warning, setWarning] = useState(false)
    const [response, setResponse] = useState()
    let navigate = useNavigate()
    const {
        handleSubmit,
        formState: { errors },
        control,
        watch,
    } = useForm()
    ;
    const onFailure = (response) => {
        if (response && response?.email[0] === 'This field must be unique.') {
            setResponse('The email has already been used!')
        } else{
            setResponse('Oops... Something went wrong!')
        }
        setWarning(true)
    }
    
    const onSuccess = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data.tokens));
        // FIXME: Fix navigate after login user in
        navigate("/home");
        window.location.reload(false);
        
    }

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        const password2 = data.passwordConfirm
        register({ email, password, password2, onSuccess, onFailure });
    };

    return (
        <div className={styles.container}>
            <h2 className={styles["form-title"]}>Sign-in</h2>
            <form
                className={styles.AuthForm}
                action="get"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles.inputs} style={{ width: "100%" }}>
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
                                placeholder="Email..."
                                name="email"
                                autoFocus
                                onChange={onChange}
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
                                placeholder="Password..."
                                name="password"
                                onChange={onChange}
                            />
                        )}
                    />
                    {errors?.password && (
                        <p className="text-left ml-4 mr-4 -mt-2 text-white">
                            {errors.password.message}
                        </p>
                    )}
                    <Controller
                        control={control}
                        name="passwordConfirm"
                        rules={{
                            validate: (value) => {
                                if (watch("password") !== value) {
                                    return "⚠️ : The passwords do not match";
                                }
                            },
                        }}
                        render={({ field: { onChange } }) => (
                            <PasswordInput
                                placeholder="Confirm password..."
                                name="passwordConfirm"
                                onChange={onChange}
                            />
                        )}
                    />
                    {errors?.passwordConfirm && (
                        <p className="text-left ml-4 mr-4 -mt-2 text-white">
                            {errors.passwordConfirm.message}
                        </p>
                    )}
                </div>
                <SubmitButton
                    style={{
                        marginTop: "100px",
                        width: "100%",
                        marginBottom: "20px",
                    }}
                    text="Submit"
                />
            </form>
            <NavLink
                className="text-gray-300 underline text-sm hover:text-white"
                to="/login"
            >
                Already have an account? Log-in
            </NavLink>
            <Warning className={`absolute bottom-0 translate-y-[75%] w-[100%] ${warning ? 'active' : ''}`}>{response}</Warning>
        </div>
    );
};

export default RegisterForm;
