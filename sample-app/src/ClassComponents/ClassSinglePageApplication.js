import { Component } from "react";

class ClassSinglePageApplication extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    console.log("componentdidmount-> It run just once.");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("render");

    const filterMonster = this.state.monsters.filter((monster) => {
        return monster.name.includes(this.state.searchString);
      });
    return (
      <div>
        <h1>This is a single Page Application Sample</h1>
        <input
          classname="search-box"
          type="search"
          placeholder="searchplz"
          onChange={(event) => {
            const searchString= event.target.value.toLocaleLowerCase();
            this.setState(()=>{
                return {searchString}
            })
          }}
        />

        <div>
          {filterMonster.map((val) => {
            return (
              <div key={val.id}>
                <h4>{val.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ClassSinglePageApplication;
