/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Job_Card = ({ cardInfo }) => {
   const { _id, title, date, maxPrice, minPrice, description} = cardInfo
   return (
      <div className="shadow-xl p-8 space-y-3 flex flex-col">
         <h1 className="text-3xl font-bold">Title: {title}</h1>
         <p className="font-medium text-xl">Deadline: {date}</p>
         <p className="font-bold text-xl">Price: ${minPrice} - ${maxPrice}</p>
         <p className="flex-1 text-justify">{description}</p>
         <Link to={`job_detail/${_id}`}><button className="btn btn-success w-full">Bid Now</button></Link>
      </div>
   );
};

export default Job_Card;