const LogFilter = (props) => {
  //创建监听change事件的响应函数：
  const changeHandler = (event) => {
    props.onYearChange(event.target.value);

  };
  //
  return (
    <div>
      年份：
      <select value={props.year} onChange={changeHandler}>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
      </select>
    </div>
  );
};

export default LogFilter;
