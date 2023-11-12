import { useQuery } from "@tanstack/react-query";
import UseApi from "../../Hooks/UseApi";
import UseAuth from "../../Hooks/UseAuth";
import PostedCard from "../../components/PostedCard/PostedCard";

const Posted_job = () => {
   const axios = UseApi();
   const { user } = UseAuth();

   const { data, isLoading } = useQuery({
      queryKey: ['posted-job'],
      enabled: !!user,
      queryFn: () => {
         return axios.get(`/jobs/post/${user?.email}`)
      }
   })

   if (isLoading || !user) {
      return <p className="mt-24 text-2xl text-center">loading....</p>
   }

   if (data?.data.length === 0) {
      return <p className="mt-32 text-2xl text-center font-bold">You have not any job post yet!!</p>
   }

   return (
      <div className="mt-24">
         <h1 className="text-4xl font-bold text-center mb-8">All Posted Jobs</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
               data?.data.map(obj => <PostedCard key={obj._id} data={obj}></PostedCard>)
            }
         </div>
      </div>
   );
};

export default Posted_job;