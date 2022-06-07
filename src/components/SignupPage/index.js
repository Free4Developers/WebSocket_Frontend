import React, { useState } from 'react';
import './index.css'
import { signUp } from '../../api/sign';
const SignUpPage = () =>{
    const [userInfo, setUserInfo] = useState({ email: '', nickname: '', password: ''});
    
    const onUserInfoChange = (target, e) => {
        if(target === 'USER_ID'){
            setUserInfo((prevState) => { return {...prevState, email: e.target.value}})
        }
        else if('USER_NICKNAME'){
            setUserInfo((prevState) => { return {...prevState, nickname: e.target.value}})
        }
        else if(target === 'USER_PASSWORD'){
            setUserInfo((prevState) => { return {...prevState, password: e.target.value}})
        }

    }

    const handleSignup = () => {
        console.log(userInfo)
        signUp(userInfo);
    }
    return (
        <div className='signupPage'>
            <h1>WebSocket Chrome Extension Test Sign Up</h1>
            <br />
            <br />
            <input className='input_holder' type='text' placeholder='닉네임을 입력해주세요' onChange={(e)=>onUserInfoChange('USER_NICKNAME', e)}/>
            <br />
            <br />
            <input className='input_holder' type='text' placeholder='아이디를 입력해주세요' onChange={(e)=>onUserInfoChange('USER_ID', e)}/>
            <br />
            <br />
            <input className='input_holder' type='password' placeholder='비밀번호를 입력해주세요' onChange={(e)=>onUserInfoChange('USER_PASSWORD', e)}/>
            <br />
            <br />
            <button className='signup_btn' onClick={handleSignup}>회원가입</button>
            <br />
        </div>
    )
}

export default SignUpPage