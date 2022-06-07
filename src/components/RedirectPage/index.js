import React from "react";
import { getUserToken } from "../../api/sign";
const RedirectPage = () => {
    const params = new URLSearchParams(window.location.search)
    getUserToken(params.get('code'), params.get('state'));
    return(<div>
        hello
    </div>);
}

export default RedirectPage;