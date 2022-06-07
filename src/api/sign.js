import axios from "axios";

export async function signIn(param){
    const data = await axios.post("http://localhost:8080/auth/signin", {
        email: param.email,
        password: param.password
    }).then(res => {
        console.log(res)
        return res;
    }).catch(err => {
        console.log(err)
        return err;
    })

    return data;
}

export async function signUp(param){
    const data = await axios.post("/auth/signup", {
        nickname: param.nickname,
        email: param.email,
        password: param.password
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

    return data;
}

export async function getUserToken(code, state){
    console.log(code)
    console.log(state)
    const data = await axios.get(`/oauth2/login/callback/kakao?code=${code}&state=${state}`);
    console.log(data)
    return data.data;
}