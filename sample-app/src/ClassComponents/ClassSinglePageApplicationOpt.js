import { Component } from "react";

class ClassSinglePageApplicationOpt extends Component {
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

  OnSearchChange=(event) => {
    const searchString= event.target.value.toLocaleLowerCase();
    this.setState(()=>{
        return {searchString}
    })
  }


  render() {
    console.log("render");
    const {monsters, searchString}= this.state;
    const {OnSearchChange}=this;

    const filterMonster = monsters.filter((monster) => {
        return monster.name.includes(searchString);
      });
    return (
      <div>
        <h1>This is a single Page Application Sample with Optamisation , destructuring, etc</h1>
        <input
          classname="search-box"
          type="search"
          placeholder="searchplz"
          onChange={OnSearchChange}
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

export default ClassSinglePageApplicationOpt;
