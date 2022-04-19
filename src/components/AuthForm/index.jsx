import styles from './index.module.css'
import SubmitButton from '../UI/SubmitButton/index';
import {useState} from 'react'
import Input from "../../components/UI/Input/index";


const AuthForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const passwordInputType = () => {
        return showPassword ? 'text' : 'password'
    }
    return (
        <div className={styles.container}>
            <h2 className={styles["form-title"]}>Log-in</h2>
            <form className={styles.AuthForm} action="get">
                <div style={{ width: "100%" }}>
                    <Input type="text" placeholder="Mail..." name="mail" />
                    <Input
                        type={passwordInputType()}
                        placeholder="Password..."
                        name="password"
                    />
                </div>
                <input
                    onClick={toggleShowPassword}
                    checked={showPassword}
                    type="checkbox"
                    id="showPassword"
                />
                <label htmlFor="showPassword">show password</label>
                <SubmitButton
                    style={{ marginTop: "100px", width: "90%" }}
                    text="Submit"
                />
            </form>
        </div>
    );
}

export default AuthForm