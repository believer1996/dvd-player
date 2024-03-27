import React, { useEffect, useState } from 'react';
import './App.css';
export function App() {

  const[result,setResult]=useState([]);
  let[count,setCount]=useState(0);

  const handleClick=(()=>{
   count=count+1;
   setCount(count);
  })

  async function fetchData(){
    const data=await fetch('https://content.newtonschool.co/v1/pr/64a277bd01d4ee34c6074e33/moviesList')
    const response=await data.json();
    return response;
  }

useEffect(()=>{
  fetchData().then((result)=>{
     setResult(result);
  })
},[])

  return (
    <div className="app">
      <h1 > DVD count :{count}</h1>
      <div className='container'>
        
        {result.map((item)=>{
        return  <div className='card' onClick={handleClick} >
          <img src={item.backdrop_path} alt={item.title}/>
          <p> {item.title}</p>
          </div>

      })}
         
      
      </div>

    </div>


  );
  }
  