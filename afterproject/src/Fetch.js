/*
自定义钩子需要以use开头

返回值：主要返回请求函数 和 state值
{
}

提高通用性：

*/

import { useCallback, useState } from "react";

export default function useFetch(reqObj) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("http://localhost:1337/api/" + reqObj.url, {
        method: reqObj.method || "get",
        headers: {
          "Content-Type": reqObj.type || "application/json", //请求头设置请求类型
        },
        body:
          !reqObj.method || reqObj.method === "get"
            ? null
            : JSON.stringify({ data: reqObj.body }), //请求体设置为json数据
      });
      if (res.ok) {
      } else {
        throw new Error("xxx");
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);
  return {
    loading,
    error,
    fetchData,
    data,
  };
}
