// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App=()=> {
  const [diceNumber,setDiceNumber]=useState(1);
  const refresDice=()=>{
      const ranNo = Math.floor(Math.random()*6)+1;
      setDiceNumber(ranNo);
  }
  return (
    <div>
     <center>
      <img width={200} height={200} src={require(`./assets/${diceNumber}.png`)} className="my-7"></img>
      <button className='border-2 px-5 py-2 my-2 rounded-lg bg-cyan-600 text-white hover:bg-blue-800' onClick={refresDice}>Click</button>
     </center>
    </div>
  );
}

export default App;
