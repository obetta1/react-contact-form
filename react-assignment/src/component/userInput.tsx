import { ChangeEvent, useState } from "react"
import { ImportsNotUsedAsValues } from "typescript"

 

function UserContactFom(){

   const [input, setInput] : any= useState({})

   const handleSubmit = (event: { preventDefault: () => any })=>{
    event.preventDefault()
    alert( " FIRST NAME    : "+input.firstName 
        +" \n\n LAST NAME     : "+ input.lastName +" \n\nAGE           :" 
        +input.age + "\n\n NATIONALITY      : "+ input.Nationality
         + "\n\n STATE OF ORIGIN       : " + input.stateOfOrigin)
   }

   const handleChanges = (event:ChangeEvent<HTMLInputElement>)=>{
    const name = event.target.name
    const value = event.target.value
    setInput((values :any)=>({...values ,[name]:value}))
   }
    return(
        <div>
    <form onSubmit={handleSubmit} >
      <div style={{ margin:30, }} >
          <label>firstName
      <input type ="text" name='firstName'  value = {input.firstName} onChange={handleChanges} style={{ marginLeft:20}} placeholder='Enter first name'/>
    </label>
    </div>

    <div style={{ margin:30, }}>
     <label >lastName
      <input type ="text" name='lastName'  value = {input.lastName} onChange={handleChanges}  style={{ marginLeft:20}} placeholder='Enter last name'/>
    </label>
    </div> 

    <div style={{ margin:30, }}>
    <label>age
    <input type ="text" name='age' value = {input.age} onChange={handleChanges}   style={{ marginLeft:60}} placeholder='Enter age'/>
    </label>
    </div> 
    <div style={{ margin:30, }}>
    <label>Nationality
      <input type ="text" name='Nationality' value = {input.Nationality} onChange={handleChanges}  style={{ marginLeft:20}}  placeholder='country'/>
    </label>
    </div> 
    <div style={{ margin:30, }}>
    <label>State of origin
      <input type ="text" name='stateOfOrigin' value = {input.stateOfOrigin} onChange={handleChanges}  style={{ marginLeft:10}} placeholder='Enter state'/>
    </label>
    </div> 
   <input  type='submit' onClick = { (event)=>{}}/>
</form>
  </div>
    )

    }
export default UserContactFom