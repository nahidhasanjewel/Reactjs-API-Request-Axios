
import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [joke, setJoke]= useState("")

  const getJoke = () => {

     

    Axios.get("https://official-joke-api.appspot.com/random_joke")
        .then((response)=>{
        setJoke(response.data.setup +"...."+response.data.punchline)
      }
    )

    //  fetch("https://official-joke-api.appspot.com/random_joke")
    //  .then((response)=> response.json())
    //  .then((data)=>{
    //       setJoke(data.setup+"..."+data.punchline);
       
    //  })

    }
      
    
    return (
      <div className="App">
      <header className="App-header">
      <div>Hello World</div>
  
      <button onClick={getJoke}>Get joke</button>{joke}
  
  
        </header>
      </div>
    );
  };




export default App;
