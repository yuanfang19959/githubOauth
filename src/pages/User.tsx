import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchUserInfo } from "../services";
import { List, Avatar } from 'antd-mobile'

export default () => {
    const [search, setSearch] = useSearchParams();
    const [user, setUser] = useState<object>({})

    useEffect(() => {
        fetchUserInfo(search.get("token")).then(({ data }) => {
            setUser(data)
        })
    }, [])

    return <>
        <List>
          <List.Item
            prefix={<Avatar src={user?.avatar_url} />}
            description={user?.email}
          >
            欢迎您，{user?.name}
          </List.Item>
        </List>
    </>
}