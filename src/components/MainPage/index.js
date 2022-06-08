import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from "../../api/user";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store";
const MainPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.accessToken);
    const [userInfo, setUserInfo] = useState({nickname: '', email: ''});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        console.log(accessToken)
        if(accessToken!==''){
            console.log(accessToken)
            let splitToken = accessToken.split('.');
            let id = splitToken[1].substr(0,2);
            console.log(id)
            getUser('1', accessToken).then((res) => {
                console.log(res);
                setUserInfo(prevState => {return {...prevState, nickname: res.data.nickname, email: res.data.email}})
                setIsLoggedIn(true);
            })
        }
    },[accessToken])
    return (<div>
        <h1>안녕하세요</h1>
        {isLoggedIn || 
            <>
                <h1>로그인을 해주세요!</h1>
                <button onClick={()=>{navigate('/login')}}>로그인</button>
            </>
        }
        {isLoggedIn && 
            <>
                <h1>
                    {userInfo.nickname}님!
                </h1>
                <button onClick={()=>{
                    dispatch(authActions.logout())
                    setIsLoggedIn(false);
                    }}>로그아웃</button>
            </>
        }
    </div>)
}

export default MainPage;