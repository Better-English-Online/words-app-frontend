import styles from "./Home.module.css";
import Header from "../../Header/Header";
import Main from "../../Main/Main";
import Footer from "../../Footer/Footer";

const Home = () => {
    return (
        <div className={styles.home}>
            <Header />
            <Main>
                <h1>Home</h1>
            </Main>
            <Footer />
        </div>
    );
};

export default Home;
