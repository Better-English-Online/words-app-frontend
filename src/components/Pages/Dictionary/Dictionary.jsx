import Header from "../../Header/Header";
import Main from "../../Main/Main";
import Footer from "../../Footer/Footer";
import styles from './Dictionary.module.css'

const Dictionary = () => {
    return (
        <div className={styles.dict}>
            <Header />
            <Main><h1>My dictionary</h1></Main>
            <Footer />
        </div>
);
};

export default Dictionary;
