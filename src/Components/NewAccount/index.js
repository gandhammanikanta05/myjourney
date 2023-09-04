import { Link } from 'react-router-dom'
import {LoginContainer, MainHeading, CreateHead, LoginForm, UsernameLabel, UsernameInput, PasswordLabel, PasswordInput, LoginBtn, Para} from './styledComponents'
import { useState } from 'react'

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const changeUsername = event => {
        setUsername(event.target.value)
    }

    const changePassword = event => {
        setPassword(event.target.value)
    }

    const onsubmitDetails = async event => {
        event.preventDefault()
        const userDetails = {username, password}
        console.log(userDetails)
        const url = 'http://localhost:4000/NewAccount'
        const options = {
          method: 'POST',
          body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
    }

    return(
        <LoginContainer>
            <MainHeading>My Masters Journey</MainHeading>
            <CreateHead>CREATE AN ACCOUNT</CreateHead>
            <LoginForm onSubmit={onsubmitDetails}>
                <UsernameLabel htmlFor="username">NAME</UsernameLabel>
                <UsernameInput id="username" type="text" placeholder="Enter Your Name" onChange={changeUsername} />
                <PasswordLabel htmlFor="password">PASSWORD</PasswordLabel>
                <PasswordInput id="password" type="password" placeholder="Enter Your Password" onChange={changePassword} />
                <LoginBtn type="submit">Submit</LoginBtn>
                <Para>Already have an account ?</Para>
                <Link to="/LoginPage">
                Login
                </Link>
            </LoginForm>
        </LoginContainer>
    )
}

export default LoginPage