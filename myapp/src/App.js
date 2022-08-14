import React, {useState } from "react"
//import style from "./App.css"

function App() {

  
  const [Arr,setArray]=useState([]);

  function getRandom(max=400)
  {
    return Math.floor(Math.random()*max);
  }

  
  function setupp()
  {
    for(let i=0;i<150;i++)
    {
      const x=getRandom();
      setArray(item=>{return [x, ...item]})
    }
   
  }

  const SORT = () => {
    let arr=Arr;
    
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < ( arr.length  ); j++){

            setTimeout(()=>{
              console.log(arr);
                setArray([...arr])
              if(arr[i] > arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]] 
              } 
            },1500)     
      } 
    }
   
  };
  

 
  return (
    <div>
    <button onClick={setupp}>setup!</button>
    <button onClick={SORT}>click me!</button>
    <div className="Container">
     {
        Arr.map((value,index)=>{
        return <div className="array-bar" id={index} key={index}
        style={{height:`${value}px`}}></div>})
     }
    </div>
    </div>
  );


}

export default App;
