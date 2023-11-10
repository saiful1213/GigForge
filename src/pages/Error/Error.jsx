import { Link } from "react-router-dom";

const Error = () => {
   return (
      <div>
         <h1>Something Went wrong..</h1>
         <Link to="/"><button className="btn btn-error">Go Back</button></Link>
      </div>
   );
};

export default Error;