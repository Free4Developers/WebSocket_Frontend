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
        document.dispatchEvent(new CustomEvent('chrome_extension_available_app', { detail: { available: true } }));
    },[])

    useEffect(()=>{
        // if Access Token Valid
        if(accessToken!==''){
            // 1. set Access Token to Redux Store to use for the application
            let splitToken = accessToken.split('.');
            let id = JSON.parse(atob(splitToken[1])).sub;

            getUser(id, accessToken).then((res) => {
                setUserInfo(prevState => {return {...prevState, nickname: res.data.nickname, email: res.data.email}})
                setIsLoggedIn(true);
                // 2. send Access Token to extension with event
                let data = {
                    accessToken: accessToken,
                    userInfo: res.data,
                    serverUri: 'http://localhost:8080/stomp/chat',
                    stomp: {
                        subscribe: '/channel/chat/room/open',
                        enter: '/publish/chat/enter',
                        send: '/publish/chat/message',
                        roomId: 'open',
                    },
                    debugMode: true, 
                };
                // send data through a DOM event
                document.dispatchEvent(new CustomEvent('authListener', { detail: data }));
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