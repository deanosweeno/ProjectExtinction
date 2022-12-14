import './PopupMcq.css'
function PopupMcq(props) 
{
  return (props.trigger) ? (
    //close button for popup
    <div className="PopupMcq">
      <div className="popup-inner-mcq">
        <button className="close-btn" onClick={() => props.setTrigger(false)} >close</button>
        { props.children }
      </div>
    </div>
  ): "";
}


export default PopupMcq;