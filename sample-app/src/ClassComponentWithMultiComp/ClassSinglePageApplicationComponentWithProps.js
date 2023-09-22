import { Component } from "react";
import CardList from "./CardList";
import InputSearch from "./InputSearch";

class ClassSinglePageApplicationComponentWithProps extends Component {
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

  OnSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString };
    });
  };

  render() {
    console.log("render");
    const { monsters, searchString } = this.state;
    const { OnSearchChange } = this;

    const filterMonster = monsters.filter((monster) => {
      return monster.name.includes(searchString);
    });
    return (
      <div>
        <h1>Class component with child component with Props etc. redering will happen when set stateis called or props changes</h1>
        <InputSearch classname="search-box" type="search" placeholder="searchplz" onChangeHandler={OnSearchChange}/>
        
        <CardList monsters={filterMonster}/>
      </div>
    );
  }
}

export default ClassSinglePageApplicationComponentWithProps;
