import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom"
import { Button } from 'antd-mobile';
import { URL } from "../constants/index";
import { fetchAccessToken, fetchUserInfo } from "../services";
import icon from '@/assets/icon.svg'

const CallBack = (props: any) => {
  const [search, setSearch] = useSearchParams();
  const [code, setCode] = useState(search.get("code"))
  const navigator = useNavigate();

  /**
   * 跳转页面
   */
  const goPage = () => {
    location.href = URL;
  }

  useEffect(() => {
    if (code && search.get("state")) {
      let code = search.get('code')
      fetchAccessToken(code).then(({ data }) => {
        let str = data.replace("&", "=").replace("&", "=")
        let arr = str.split("=")
        navigator(`/user?token=${arr[1]}`)
      })
    }
  }, [])


  return <>
    <div style={{ textAlign: 'center' }}>
      <Button onClick={goPage}>
        <img src={icon} style={{ width: 15, marginRight: 5 }} />
        点击授权github登陆
      </Button>
    </div>
  </>
}

export default CallBack;