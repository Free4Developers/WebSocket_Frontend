import React from 'react';
import './index.css'
import { Link } from "react-router-dom";
const LoginPage = () =>{

    return (
        <div className='loginPage'>
            <h1>WebSocket Chrome Extension Test Front Page</h1>
            <input className='input_holder' placeholder='아이디를 입력해주세요' />
            <br />
            <br />
            <input className='input_holder' placeholder='비밀번호를 입력해주세요'/>
            <br />
            <br />
            <button className='login_btn'>로그인</button>
            <br />
            <div className='login_extra'>
            <Link to='/signup'>회원가입</Link> / <a>아이디 찾기</a> / <a>비밀번호 찾기</a>
            </div>
        </div>
    )
}

export default LoginPage