import {SignUpForm} from "../../components/signUpForm/SignUpForm";
import {SignInForm} from "../../components/signInForm/SignInForm";
import './Authentication.scss';
export const Authentication = () => {

    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}