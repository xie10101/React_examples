//弹出确认框的设置：

import BackDrop from "../Backdrop/BackDrop";
import classes from "./Confirm.module.css";
const Confirm = (props) => {
  return (
    <BackDrop onClick={() => props.onCancel} className={classes.backDrop}>
      <div className={classes.outdiv}>
        <p className={classes.text}>{props.confirmText}</p>
        <div>
          <button
            className={classes.btn_c}
            onClick={(e) => {
              props.onCancel(e);
            }}
          >
            取消
          </button>
          <button
            className={classes.btn_ok}
            onClick={() => {
              props.onOk();
            }}
          >
            确认
          </button>
        </div>
      </div>
    </BackDrop>
  );
};

export default Confirm;
