// import React,{useState,useEffect } from "react";

// export default function FetchApi() {

    export const fetchPost = async () => {
        const response = await fetch("https://raw.githubusercontent.com/deanosweeno/ProjectExtinction/main/public/animalAPI.json");
        const data = await response.json();
        return data
      
      };