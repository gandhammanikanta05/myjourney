import { Link } from 'react-router-dom'
import {LoginContainer, MainHeading, LoginHead, LoginForm, UsernameLabel, UsernameInput, PasswordLabel, PasswordInput, LoginBtn, Para} from './styledComponents'

const LoginPage = () => {
    return(
        <LoginContainer>
            <MainHeading>My Masters Journey</MainHeading>
            <LoginHead>Login</LoginHead>
            <LoginForm>
                <UsernameLabel htmlFor="username">USERNAME</UsernameLabel>
                <UsernameInput id="username" type="text" placeholder="Enter Your Name" />
                <PasswordLabel htmlFor="password">PASSWORD</PasswordLabel>
                <PasswordInput id="password" type="password" placeholder="Enter Your Password" />
                <LoginBtn type="submit">Login</LoginBtn>
                <Para>OR</Para>
                <Link to="/NewAccount">
                Create an Account
                </Link>
            </LoginForm>
        </LoginContainer>
    )
}

export default LoginPage