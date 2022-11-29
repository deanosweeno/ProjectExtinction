import React, { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      apiData:[],
      isFetched:false,
      errorMsg:null
    };
  }

async componentDidMount(){
  try{
    const API_URL = 'https://raw.githubusercontent.com/bengorm/AnimalfactsApi/main/db.json';
    const response = await fetch(API_URL);
    const jsonResult = await response.json();


    this.setState({apiData: jsonResult.animalList});
    this.setState({isFetched:true});
  }catch(error){
    this.setState({isFetched:false});
    this.setState({errorMsg:error});
  }
}



  render() {
    if(this.state.errorMsg){
      return(
        <div className="error">
          <h1> We're sorry </h1>
          <p> error message is: {this.state.errorMsg.toString()}</p>
          </div>
      );
    }else if (this.state.isFetched === false){
      return(
        <div className="fetching">
          <h1> loading API</h1>
          </div>
      );
    } else{
    return (
      <div className="App">
        <div className="species">
          {console.log(this.state.apiData)}
          {this.state.apiData.map((s)=>
            <tr key = {s.crocodile}>

              {s.crocodile.region}
              </tr>
            )}
        </div>
      </div>
    );
  }
}
}
export default App;
