import styles from './Main.module.css'


const Main = ({children, style}) => {
    console.log(style)
    return <div style={style} className={styles.main}>
        {children}
    </div>;
};

export default Main