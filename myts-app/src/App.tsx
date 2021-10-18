import React, { ChangeEvent } from 'react';
import logo from './logo.svg';
import { useState , useRef} from 'react';

import './App.css';
import Multiplication from './components/addition';
import Subtraction from './components/subtraction';
import Addition from './components/addition';

function App() { 


  const myRef = useRef(0)
  const [count, update] = useState(0)
  const [user, setUser] : any= useState({})
  let [display, setdisplay] = useState(false)

 let numbercount = 0

  const handleSummit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    display=true
    
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
    const name = event.target.name;
    const value= event.target.value;
    setUser((values: any) => ({...values, [name]:value}))
  }
  

  return (
    <div className="App">
      <div>{
      display? <div><h2>{user.firstName}</h2>
      <h2>{user.lastName}</h2>: 
      </div>: ""}
      </div>

        <div>
      <button style ={{margin : 20, border:30, color:'red'}}  onClick={()=>{ myRef.current = count; numbercount = numbercount + 1000; update(count+1)}}> Increament</button>
      <button onClick={()=>{ myRef.current =count; update(count-1)}} > Decreament</button>
      </div>
      <div>
        < Multiplication value={count}/>
      </div>
      <div>
        <Subtraction value={count}/>
      </div>
      <div>
      <Addition value={count}/>
      </div>

      <div>
        <form onSubmit={handleSummit}>
          <label>Please enter your name here
          <input type ="any"
          name="firstName"
           value = { user.firstName || ""}
           onChange ={handleChange}
          />
             </label>
             <label> enter your age 
               <input 
               type = 'text'
               name = 'lastName'
              value = {user.lastName}
              onChange ={handleChange}
               />
             </label>
             <input type="submit" onClick={()=>{display=true}}/>
         </form>
      </div>
    </div>
  ); 
}

export default App;
