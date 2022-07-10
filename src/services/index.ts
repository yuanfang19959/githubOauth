import axios from 'axios';
import { URL, CLIENT_ID, CLIENT_SECRET, REDIRECR_URL } from "@/constants/index.ts";

/**
 * 获取accesstoken
 * @param code 
 * @returns 
 */
export const fetchAccessToken = async (code: string | null) => {
    const res = await axios({
        method: 'post',
        url: '/api',
        data: {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code,
            redirect_uri: REDIRECR_URL,
        }
    })
    return res;
}

/**
 * 获取用户信息
 * @param res 
 */
export const fetchUserInfo = (token: any) => {
    return axios({
        method: 'get',
        url: '/kazi',
        headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github+json"
        }
    })
}