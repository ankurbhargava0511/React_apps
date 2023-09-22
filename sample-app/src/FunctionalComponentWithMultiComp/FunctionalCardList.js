const FunctionalCardList = (props) => 
{
  const {monsters}= props;
  console.log(monsters)
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

export default FunctionalCardList