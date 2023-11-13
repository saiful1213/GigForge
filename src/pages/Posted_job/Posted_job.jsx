import { useQuery } from "@tanstack/react-query";
import UseApi from "../../Hooks/UseApi";
import UseAuth from "../../Hooks/UseAuth";
import PostedCard from "../../components/PostedCard/PostedCard";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import loader from "../../assets/loader.webp"

const Posted_job = () => {
   const axios = UseApi();
   const { user } = UseAuth();

   const { data, isLoading, refetch } = useQuery({
      queryKey: ['posted-job'],
      enabled: !!user,
      queryFn: () => {
         return axios.get(`/jobs/post/${user?.email}`)
      }
   })


   if (isLoading || !user) {
      return <img src={loader} className="mt-28 mx-auto"/>
   }

   if (data?.data.length === 0) {
      return <p className="mt-32 text-2xl text-center font-bold">You have not any job post yet!!</p>
   }

   const handleDelete = id => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      })
         .then((result) => {
            if (result.isConfirmed) {
               axios.delete(`/jobs/delete/${id}`)
                  .then(res => {
                     if (res.data.deletedCount > 0) {
                        Swal.fire({
                           title: "Deleted!",
                           text: "You Job Post is Deleted!",
                           icon: "success"
                        });
                        refetch()
                     }
                  })
            }
         });
   }


   return (
      <div className="mt-24">
         <Helmet>
            <title>GigForge | Posted Job</title>
         </Helmet>
         <h1 className="text-4xl font-bold text-center mb-8">All Posted Jobs</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
               data?.data.map(obj => <PostedCard key={obj._id} handleDelete={handleDelete} data={obj}></PostedCard>)
            }
         </div>
      </div>
   );
};

export default Posted_job;