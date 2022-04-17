import React , {Component} from 'react';
import './App.css';

import firebase from './firebase' 

class Pagina extends Component{
    constructor(props){
      super(props);
      
      this.state = {
        UID: "",
        email: ""
      }

      firebase.auth().onAuthStateChanged((user) => {
        if(user){

          this.setState({
            UID: user.uid,
            email: user.email
          })

          
        }else{
          console.log('não encontrei');

        }
      })      
    }

    render(){
      return (
        <div>
           <h1>
             Dados
           </h1>

          Uid: {this.state.UID} <br></br>
          Email: {this.state.email}
        </div>
      )
    } 
  }
  


function App() {
  return (
    <div>
      
      <Pagina/>
    </div>
  );
}

export default App;
