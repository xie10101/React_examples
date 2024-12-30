import "./confirmModel.css"
import Card from "../card/Card";
const ConfirmModel = (props) => {
    return (
        <Card className="confirmModel">
                <div className="title">
                    Title
                </div>  
            <div className="confirmText">
                <p>该操作不可恢复！</p>
                <p>该操作不可恢复！</p>
                <p>该操作不可恢复！</p>
                <p>该操作不可恢复！</p>
                <p>该操作不可恢复！</p>

            </div>
            <div className="confirmButton">
                <button className="confirm" onClick={props.onConfirm}>
                   确定
                </button>
                <button className="cancle" onClick={props.onCancel}>
                    取消
                </button>
            </div>
        </Card>
     );
}
 
export default ConfirmModel;