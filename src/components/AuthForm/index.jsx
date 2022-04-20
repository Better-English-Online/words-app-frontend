import styles from './index.module.css'
import SubmitButton from '../UI/SubmitButton/index';
import Input from "../../components/UI/Input/index";
import PasswordInput from "../../components/UI/PasswordInput/index"


const AuthForm = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles["form-title"]}>Log-in</h2>
            <form className={styles.AuthForm} action="get">
                <div className={styles.inputs} style={{ width: "100%" }}>
                    <Input type="text" placeholder="Mail..." name="mail" />
                    <PasswordInput/>
                </div>
                <SubmitButton
                    style={{ marginTop: "100px", width: "100%" }}
                    text="Submit"
                />
            </form>
        </div>
    );
}

export default AuthForm