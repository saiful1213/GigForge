import { Link } from "react-router-dom";

const Error = () => {
   return (
      <div className="flex items-center gap-12">
         <img src="https://i.ibb.co/xXfqZkr/404.gif?fbclid=IwAR23TyoFUtVqGCxT1TK1A4bQFNPSZZpjfpVr_Yno-NR4txGwh6Z3VSdWMvQ" />
         <div>
            <h1 className="text-3xl font-bold mb-6">Something Went wrong..</h1>
            <Link to="/"><button className="btn btn-error block mx-auto">Back to Home</button></Link>
         </div>
      </div>
   );
};

export default Error;