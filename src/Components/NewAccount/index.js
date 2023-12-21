import { Link, useNavigate } from 'react-router-dom'
import {LoginContainer, MainHeading, CreateHead, LoginForm, UsernameLabel, UsernameInput, PasswordLabel, PasswordInput, LoginBtn, Para, WarningMsg} from './styledComponents'
import { useState } from 'react'


const NewAccount = props => {
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

    const onsubmitDetails = async event => {
        event.preventDefault()
        const userDetails = {username, password}
        // console.log(userDetails)
        const url = 'http://localhost:5001/NewAccount'
        const options = {
          method: 'POST',
          body: JSON.stringify(userDetails),
          headers: {'Content-Type':'application/json'},
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(response.ok)
        if(response.ok === true){
            changeWarnMsg("")
            alert("account created successfully")
            navigate("/LoginPage")
        }else{
            changeWarning(true)
            changeWarnMsg(data)
        }
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
                 {warning} <WarningMsg>{warnMsg}</WarningMsg>
                <Para>Already have an account ?</Para>
                <Link to="/LoginPage">
                Login
                </Link>
            </LoginForm>
        </LoginContainer>
    )
}

export default NewAccount