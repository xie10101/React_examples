import React, { useEffect } from "react";
import { useState } from "react";
import Listitem from "./Listitem";
const STU_DATA = [
  {
    id: "1",
    attributes: {
      name: "xxxxx",
      age: 12,
      gender: "男",
      address: "hua",
    },
  },
  {
    id: "2",
    attributes: {
      name: "hhhh",
      age: 12,
      gender: "男",
      address: "hua",
    },
  },
];

const StudentList = (props) => {
  const [stuData, setStuData] = useState(STU_DATA);
  const [error, setError] = useState(null);
  /*
仅在组件初始化时进行一次数据获取，不会再次获取数据，因此我们可以使用useEffect来实现这一目的。useEffect接受两个参数，第一个参数是一个函数，第二个参数是一个数组，数组中的元素是依赖项。当依赖项发生变化时，useEffect会重新执行函数。如果依赖项为空数组，useEffect只会在组件初始化时执行一次。
需要注意，依赖项为[]仅执行一次 
*/
  // useEffect(() => {
  //   //数据加载中
  //   setLoading(true);
  //   // fetch函数直接调用 get为默认请求方式
  //   fetch("http://localhost:3000/posts")
  //     .then((res) => {
  //       if (res.code !== 200) {
  //         console.log(res);
  //         //res参数代表的是请求结果;
  //         //获取json数据：
  //         return res.json(); //将其中的json数据直接转换为对象数据
  //         //json转换成功后调用下一then
  //       }
  //       setLoading(false);
  //       throw new Error("数据加载失败");
  //     })
  //     .then((data) => {
  //       console.log("11");
  //       console.log(data); //实际数据--js对象
  //       //将数据进行设置 setState(data)

  //       //实现加载错误的提示：

  //       ///加载结束：
  //       setLoading(false);
  //     })
  //     .catch((e) => {
  //       setLoading(false);

  //       //e.message表示error对象错误信息

  //       //设置错误状态
  //       setError(e.message);
  //     }); //请求出错的处理
  // }, []);
  /*
尝试设置state进行加载的记录
实现加载的提示
*/
  useEffect(() => {
    //前提设置
    setError(null); //设置为空 重置错误
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3000/posts");
        if (res.status === 200) {
          console.log(res);
          const data = res.json();
          console.log(data);
          setStuData(data.data);
          setLoading(false);
        } else {
          throw new Error("请求数据错误");
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData(); //注意需要执行
  }, []);

  const [loading, setLoading] = useState(false);

  return (
    <div>
      <table>
        <caption>学生信息</caption>
        <tr>
          {/* tr代表行-单元行 */}
          <th>姓名:</th>
          <th>年龄：</th>
        </tr>
        {loading && <p>加载中...</p>}
        {!loading && !error && <Listitem stus={stuData}></Listitem>}
        {error && <p>{error.message}</p>}
      </table>
    </div>
  );
};

export default StudentList;
