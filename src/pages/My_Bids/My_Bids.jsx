import { useQuery } from "@tanstack/react-query";
import UseApi from "../../Hooks/UseApi";
import UseAuth from "../../Hooks/UseAuth";

const My_Bids = () => {
   const axios = UseApi()
   const {user} = UseAuth();
   
   const {data, isLoading} = useQuery({
      queryKey: ['my-bids'],
      enabled: !! user,
      queryFn: async()=>{
         return await axios.get(`/bid_info/${user?.email}`)
      }
   })

   if(isLoading){
      return <p className="mt-28 text-2xl text-center">Loading....</p>
   }


   return (
      <div className="mt-28">
         <h1 className="text-4xl font-bold text-center mb-12">My All Bids</h1>
         <div className="overflow-x-auto">
            <table className="table table-zebra">
               {/* head */}
               <thead>
                  <tr>
                     <th>SL.</th>
                     <th>Job Title</th>
                     <th>Email</th>
                     <th>Deadline</th>
                     <th>Status</th>
                     <th>Complete Status</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     data?.data.map((item, idx) => (
                        <tr key={item._id}>
                           <th>{idx+1}</th>
                           <td>{item.title}</td>
                           <td>{item.bidderEmail}</td>
                           <td>{item.date}</td>
                           <td>pending</td>
                           <td><button className="btn btn-success btn-xs capitalize" disabled>complete</button></td>
                        </tr>
                     ))
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default My_Bids;