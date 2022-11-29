import './Splash.css';
function Splash(props) 
{
  return (props.trigger) ? (
    <div className="Splash">
      <div className="Splash">
        { props.children }
      </div>
    </div>
  ): "";
}


export default Splash;
