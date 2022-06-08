import './index.css'

const Warning = ({className, children}) => {
    return (
        <div className={`warning ${className}`}>
            {children}
        </div>
    )
}

export default Warning