import './Splash.css';
function Splash(props) 
{// Creates popup window in which the app will be placed so as to provide a splash screen of sorts
  return (props.trigger) ? (
    <div className="Splash">
      { props.children }
    </div>
  ): "";
}


export default Splash;
