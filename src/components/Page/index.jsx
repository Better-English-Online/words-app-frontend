import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import styles from './index.module.css'


const Page = ({children, mainStyle}) => {
    console.log(mainStyle)
    return (
        <div className={styles.page}>
            <Header />
            <Main style={mainStyle} className="main">
                {children}
            </Main>
            <Footer />
        </div>
    );
}

export default Page