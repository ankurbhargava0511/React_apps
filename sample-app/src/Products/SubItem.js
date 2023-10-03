import { useParams } from "react-router-dom"

const SubItem=()=>{
    const {category} =useParams();
    return (
        <div><h1>{category}</h1>
        <h2>SubDynamic Routing</h2></div>
        
    )
}

export default SubItem