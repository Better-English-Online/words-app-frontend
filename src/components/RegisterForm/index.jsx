import styles from './index.module.css'
import SubmitButton from '../UI/SubmitButton/index';
import Input from "../UI/Input/index";
import PasswordInput from "../UI/PasswordInput/index"
import { NavLink } from 'react-router-dom';


const RegisterForm = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles["form-title"]}>Sign-in</h2>
            <form onSubmit={(e) => e.preventDefault()} className={styles.AuthForm} action="get">
                <div className={styles.inputs} style={{ width: "100%" }}>
                    <Input type="text" placeholder="Email..." name="email" />
                    <PasswordInput placeholder="Password..." name='password'/>
                    <PasswordInput placeholder="Confirm password..." name='passwordConfirm'/>
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
            <NavLink className="text-gray-300 underline text-sm hover:text-white" to="/login">
                Already have an account? Log-in
            </NavLink>
        </div>
    );
}

export default RegisterForm