import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component{

     constructor(props){
       super(props)

       this.state={
         isShow: true
       }
     }

    toggleShow=()=>{
      this.setState(state=>({isShow: !state.isShow}))
    }

    render(){
      const greeting="Welcome to ReactJS Props"
        return(
          <div>
             {this.state.isShow ? <Greeting greeting={greeting} />:null}
              <button onClick={this.toggleShow} type="button">Toggle Show</button>
          </div>
        )  
    }
}
// props: Props are read only.
//const Greeting=props=><h1>{props.greeting}</h1>

const Greeting=({greeting})=><h1>{greeting}</h1>

// class Greeting extends Component{
//   render(){
//    // const greeting="Welcome to ReactJS"
//     return(   
//         <h1>{this.props.greeting}</h1>
//     )
//   }
// }

ReactDOM.render(
 <App />,
  document.getElementById('root')
);

