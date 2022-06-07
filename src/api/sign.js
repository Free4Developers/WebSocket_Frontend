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
    const data = await axios.post("http://localhost:8080/auth/signup", {
        nickname: param.nickname,
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