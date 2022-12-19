import './Button.scss';

export const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    payment: 'payment'
}
export const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
    return (
        <button
            disabled={isLoading}
            className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
            { ...otherProps }
        >
            {isLoading ? <div className="loading-spinner"></div> : children }
        </button>
    )
}