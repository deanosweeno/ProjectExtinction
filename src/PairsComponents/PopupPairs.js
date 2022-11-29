import './PopupPairs.css';
function PopupPairs(props) 
{
  return (props.trigger) ? (
    <div className="PopupPairs">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)} >close</button>
        { props.children }
      </div>
    </div>
  ): "";
}


export default PopupPairs;