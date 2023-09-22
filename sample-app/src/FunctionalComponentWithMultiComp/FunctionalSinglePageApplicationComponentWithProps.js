import { useEffect, useState } from "react";

import FunctionalInputSearch from "./FunctionalInputSearch";
import FunctionalCardList from "./FunctionalCardList";

const FunctionalSinglePageApplicationComponentWithProps =()=> {
  

  const [monsters, setMonsters] = useState([])
  const [filterMonster, setfilterMonster] = useState(monsters)
  const [searchString, setSearchString] = useState('')

  useEffect(()=>{
    console.log('UseEffect fetch')
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
      console.log('UseEffect fetch called')
    console.log(monsters)
  },[]) 

  const OnSearchChange = (event) => {
    const searchString1 = event.target.value.toLocaleLowerCase();
    setSearchString(searchString1)
  };


  useEffect(()=>{
    console.log('UseEffect filter')
    const newFilterMonster = monsters.filter((monster) => {
      return monster.name.includes(searchString);
    });
    setfilterMonster(newFilterMonster)
    console.log('UseEffect filter called')
    console.log(newFilterMonster)
  },[searchString,monsters])

  return (
    <div>
      <h1>This is Functional Component version of above with UseState and UseEffect</h1>
      <h4> Use State is use to manage State . Use Effect is use to manage sideffect , like fetch call , , it second arrgument is dependency  </h4>
      <h4> when dependency change it will fire the effect, if you dont use use effect it will cause the execution when render happen as the function code render everything each time</h4>
      <FunctionalInputSearch classname="search-box" type="search" placeholder="searchplz" onChangeHandler={OnSearchChange}/>
      <FunctionalCardList monsters={filterMonster} ></FunctionalCardList>
      
    </div>
  );
}

export default FunctionalSinglePageApplicationComponentWithProps;
