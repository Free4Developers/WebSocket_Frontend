import axios from "axios";

export async function getUser(userID, accessToken){
    const data = await axios.get(`/member/${userID}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    return data;
}