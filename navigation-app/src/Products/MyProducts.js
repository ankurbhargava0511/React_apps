
import { Route, Routes} from "react-router-dom";
import SubItem from "./SubItem";
import { Link } from "react-router-dom";

const MyProduct = () => {
  return (
    
   <Routes>
      <Route index element={<Category />} />
      <Route path=":category" element={<SubItem />} />
    </Routes>
  );
};

const Category = () => {
  
  return (
    <div>
      <h2>
            <Link to="good"> RouteGOod </Link>
            <Link to="verygood"> RouteVeryGood </Link>
            <Link to={{
              pathname:'myquery',
              search:'?abc=6547'
            }}> RouteQuery </Link>
            
      </h2>
    </div>
  );
};


export default MyProduct;
