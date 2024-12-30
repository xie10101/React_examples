import "./MyDate.css"
const  MyDate= (props) => {
  
    return  <div className="date" >
    <div className='month'>
        {props.month}
    </div>
    <div className="day">
        {props.day}
    </div>
</div> 
}
 
export default MyDate;