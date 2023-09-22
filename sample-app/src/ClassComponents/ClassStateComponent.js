import { Component } from "react";

class ClassSateComponent extends Component {

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

  render() {
    return (
      <div>
        <h1> This Class component provide state Management</h1>
        <p>
          {" "}
          Hi {this.state.name.firstName} {this.state.name.lastname} at{" "}
          {this.state.company}
        </p>

        <button
          onClick={() => {
            this.setState(() => {
              return {
                name: { firstName: "TName", lastname: "TName" },
                company: "NewHome",
              };
            });
          }}
        >
          {" "}
          Change Name
        </button>
        {
        /*<p>This is propery with Map</p>
        <div>
          {this.state.monsters.map((monster) => {
            return <h4>{monster.name}</h4>;
          })}
        </div>*/
        }
        <p>This is propery with Map with id for optimization</p>
        <div>
          {this.state.monsterswid.map((monster) => {
            return (
              <div key={monster.id}>
                <h4>{monster.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ClassSateComponent;
