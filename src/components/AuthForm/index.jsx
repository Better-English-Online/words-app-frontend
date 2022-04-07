import styles from './index.module.css'
import SubmitButton from '../UI/SubmitButton/index';


const AuthForm = ({children}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles["form-title"]}>Log-in</h2>
            <form className={styles.AuthForm} action="get">
                <div style={{width: '100%'}}>{children}</div>
                <SubmitButton style={{marginTop: '100px'}} text="Submit" />
            </form>
        </div>
    );
}

export default AuthForm