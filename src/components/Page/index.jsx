import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import styles from './index.module.css'
import {useEffect} from 'react'
const Page = ({children}) => {
    return (
        <div className={styles.page}>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </div>
    );
}

export default Page