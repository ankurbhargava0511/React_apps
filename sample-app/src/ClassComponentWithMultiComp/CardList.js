import { Component } from "react";

class CardList extends Component{

render()
{
    const {monsters}= this.props
    return(
       
        <div>
          {monsters.map((val) => {
            return (
              <div key={val.id}>
                <h4>{val.name}</h4>
              </div>
            );
          })}
        </div>
    )
}

}

export default CardList