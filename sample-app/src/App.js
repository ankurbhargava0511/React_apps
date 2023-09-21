
import { Component } from 'react';


class App extends Component {
  constructor()
  {
      super();
      this.state={
          name:{firstName:'Fname', lastname:'Lname'},
          company:"Home",
          monsters:[{name:'T1'}, {name:'T2'},{name:'T3'}],
          monsterswid:[{name:'T1', id:1}, {name:'T2',id:2},{name:'T3',id:3}]

      }
  }
  render(){
      return (
          <div className='App'>  
            <header className='App-header'></header>   
              
              <p>  Hi {this.state.name.firstName} {this.state.name.lastname}  at {this.state.company}    
              </p>
              
            <button  onClick={()=>{
              this.setState( 
                  ()=>{
                      return {
                          name:{firstName:'TName', lastname:'TName'},
                          company:'NewHome'
                      };
                  }
              )

            }}> Change Name
    
            </button>
            <p>This is propery with Map</p>
              <div>
                
               {this.state.monsters.map((monster)=>{
                 return <h1>{monster.name}</h1>
               })}

              </div>
              <p>This is propery with Map with id for optimization</p>
              <div>
                
               {this.state.monsterswid.map((monster)=>{
                 return <div key={monster.id}><h1>{monster.name}</h1></div>
               })}

              </div>

        </div>      
  );
  }
}


export default App;
