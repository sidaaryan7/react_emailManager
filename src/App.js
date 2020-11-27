import { render } from '@testing-library/react';
import React from 'react';
import Navbar from "./components/Navbar";
import Email from "./components/Email";
import uniqeid from 'uniqueid';

class App extends React.Component{
  state = {
    users:[
      {
        id:1,
        name:"john",
        email:"sidaaryan7@gmail.com"
      },
      {
        id:2,
        name:"uiuiui",
        email:"jkjkkj@gmail.com"
      },
      {
        id:3,
        name:"mnb",
        email:"qwe@gmail.com"
      }
    ],
    name:"",
    email:"",
  }
  
  //method when name input field is changed

  changeName =(e) =>{
    this.setState({
      name:e.target.value
    });
  }
// method to save email input 
  changeEmail=(e)=>{
    this.setState({
      email:e.target.value
    })
  }

// method to save email and name to user object
saveEmail =(e)=>{
  e.preventDefault();
  let email ={
    id:uniqeid(),
    name:this.state.name,
    email:this.state.email,
  }
  this.setState({users:[...this.state.users,email]})
}

//methode to delete t

delete=(id)=>{
  let newUser = this.state.users.filter(user =>(
    user.id!=id 
  ));
  this.setState({users:newUser})
}
  render(){
    return(
        <div>
          <Navbar/>

          <form className="container my-3" onSubmit={this.saveEmail}>
            <input type="text" className="form-control mb-3" placeholder="Enter Name" onChange={
              this.changeName
            }></input>

            <input typ="email" className="form-control mb-3" placeholder="enter email" onChange={
              this.changeEmail
            }></input>

            <input type="submit" className="btn btn-primary" value="Create"></input>
          </form>
    

    <h4>{this.state.users.map(user =>(
      <Email id={user.id} key={user.id} name ={user.name} email={user.email} deleteComponent={this.delete}/>
    ))}</h4>
        </div>
    )
  }
}
  
    
  
  
    


export default App;
