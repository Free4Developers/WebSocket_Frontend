import React from 'react';
import './index.css'
import kakaoBtn from '../../assets/img/kakao_login_large_wide.png'
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`
const SignUpPage = () =>{

    return (
        <div className='signupPage'>
            <h1>WebSocket Chrome Extension Test Sign Up</h1>
            <a href={KAKAO_AUTH_URL}><img src={kakaoBtn} /></a>
        </div>
    )
}

export default SignUpPage