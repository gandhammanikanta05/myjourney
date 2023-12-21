import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Cookies from "js-cookie";
import {LoginContainer, MainHeading, LoginHead, LoginForm, UsernameLabel, UsernameInput, PasswordLabel, PasswordInput, LoginBtn, Para, WarningMsg} from './styledComponents'

const LoginPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [warning, setWarning] = useState(false)
    const [warnMsg, setWarnMsg] = useState('') 

    const changeUsername = event => {
        setUsername(event.target.value)
    }

    const changePassword = event => {
        setPassword(event.target.value)
    }

   const changeWarning = status => {
        setWarning(status)
    }

    const changeWarnMsg = warn => {
        setWarnMsg(warn)
    }

    const onSubmitSuccess = (jwtToken) => {
        Cookies.set("jwt_token", jwtToken, {
          expires: 30,
          path: "/",
        });
        navigate("/");
      };

    const onSubmitFailure = (errorMsg) => {
        changeWarning(true)
        changeWarnMsg(errorMsg)
    }

    const onsubmitDetails = async event => {
        event.preventDefault()
        const userDetails = {username, password}
        // console.log(userDetails)
        const url = 'http://localhost:5001/LoginPage'
        const options = {
          method: 'POST',
          body: JSON.stringify(userDetails),
          headers: {'Content-Type':'application/json'},
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data.jwtToken)
        console.log(response.ok)
        if(response.ok === true){
            changeWarning(false)
            onSubmitSuccess(data.jwtToken)
        }else{
            onSubmitFailure(data.error_msg)
            changeWarning(true)
            changeWarnMsg(data)
        }
    }

    return(
        <LoginContainer>
            <MainHeading>My Masters Journey</MainHeading>
            <LoginHead>Login</LoginHead>
            <LoginForm onSubmit={onsubmitDetails}>
                <UsernameLabel htmlFor="username">USERNAME</UsernameLabel>
                <UsernameInput id="username" type="text" placeholder="Enter Your Name" onChange={changeUsername} />
                <PasswordLabel htmlFor="password">PASSWORD</PasswordLabel>
                <PasswordInput id="password" type="password" placeholder="Enter Your Password" onChange={changePassword} />
                <LoginBtn type="submit">Login</LoginBtn>
                {warning} <WarningMsg>{warnMsg}</WarningMsg>
                <Para>OR</Para>
                <Link to="/NewAccount">
                Create an Account
                </Link>
            </LoginForm>
        </LoginContainer>
    )
}

export default LoginPage