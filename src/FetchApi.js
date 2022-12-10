import React,{useState, useEffect } from "react";

function FetchData() {

  const[data,setData] = useState()
  const [dataReturn] = [data];
   useEffect(() => {
      const loadData = async () => {
      const response = await fetch("https://raw.githubusercontent.com/deanosweeno/ProjectExtinction/main/public/animalAPI.json");
      const data = await response.json();
      setData(data.animalList)
    };

    loadData();
  },[])
  console.log(data);
  return (
    <div>
      {console.log(data)};
    </div>
  );
} export default FetchData;