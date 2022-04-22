import styles from './index.module.css'

const SubmitButton = ({text, style}) => {
    return (
        <button style={style} type='submit' className={styles['submit-btn']}><span>{text}</span></button>
    )
}

export default SubmitButton
