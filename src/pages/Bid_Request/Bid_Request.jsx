import { useLoaderData } from "react-router-dom";

const Bid_Request = () => {
   const data = useLoaderData()
   return (
      <div className="mt-28">
         <h1 className="text-4xl font-bold text-center mb-12">All Bid Request</h1>
         <div className="overflow-x-auto">
            <table className="table table-zebra">
               {/* head */}
               <thead>
                  <tr>
                     <th>SL.</th>
                     <th>Job Title</th>
                     <th>Email</th>
                     <th>Deadline</th>
                     <th>Price</th>
                     <th>Status</th>
                     <th>Accept</th>
                     <th>Reject</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     data.map((item, idx) => (
                        <tr key={item._id}>
                           <th>{idx + 1}</th>
                           <td>{item.title}</td>
                           <td>{item.bidderEmail}</td>
                           <td>{item.date}</td>
                           <td>{item.price}</td>
                           <td>pending</td>
                           <td><button className="btn btn-success btn-xs lowercase">accept</button></td>
                           <td><button className="btn btn-error btn-xs lowercase">reject</button></td>
                        </tr>
                     ))
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Bid_Request;