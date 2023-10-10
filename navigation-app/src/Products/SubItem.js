import { useParams, useSearchParams ,Link} from "react-router-dom"


const SubItem=()=>{
    const {category} =useParams();
    const [searchParams, setSearchParams] =useSearchParams();
    const param= searchParams.get('abc');
    return (
        <div><h1>{category}</h1>
        <h1>{param}</h1>
        <h2>SubDynamic Routing with query</h2>
        <Link to="/product"> back </Link>
        </div>

        
    )
}

export default SubItem