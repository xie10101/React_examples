import classes from "./App.module.css";
function App() {
  return (
    <div className="App">
      {/* 设置多个类名时 */}
      <h1 className={`${classes.h} ${classes.border}`}>223234</h1>
    </div>
  );
}

export default App;
