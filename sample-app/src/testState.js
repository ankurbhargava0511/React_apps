import { Component } from "react";

class testState extends Component {
    constructor()
    {
        super();
        this.state={
            name:{firstName:'Fname', lastname:'Lname'},
            company:"Home"
        }
    }
    render(){
        return (
            <div>        
                <p>  Hi {this.state.name.firstName} {this.state.name.lastname}
                  at {this.state.company}    
                </p>
                
              <button onClick={()=>{
                this.setState( 
                    ()=>{
                        return {
                            name:{firstName:'TName', lastname:'LName'},
                            company:'NewHome'
                        };
                    }
                )

              }}>
      
              </button>
              
          </div>      
    );
    }
  }
  
  export default testState;