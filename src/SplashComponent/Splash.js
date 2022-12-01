import './Splash.css';
function Splash(props) 
{
  return (props.trigger) ? (
    <div className="Splash">
      { props.children }
    </div>
  ): "";
}


export default Splash;
