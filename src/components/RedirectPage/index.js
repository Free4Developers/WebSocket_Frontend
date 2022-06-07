import React from "react";
import { getUserToken } from "../../api/sign";
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/index';

const RedirectPage = () => {
    const dispatch = useDispatch();
    const params = new URLSearchParams(window.location.search)
    getUserToken(params.get('code'), params.get('state')).then((res)=>dispatch(authActions.login(res)));

    return(<div>
        hello
    </div>);
}

export default React.memo(RedirectPage);