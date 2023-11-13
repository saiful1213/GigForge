/* eslint-disable react/prop-types */
import { BsPenFill } from "react-icons/bs"
import { RiDeleteBin6Line } from "react-icons/ri"
import { Link } from "react-router-dom";
import UseApi from "../../Hooks/UseApi";
import Swal from "sweetalert2";


const PostedCard = ({ data }) => {
   const { _id, title, date, category } = data;
   const axios = UseApi();

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
                     }
                  })
            }
         });
   }

   return (
      <div className="flex border p-6 rounded-xl shadow-lg justify-between">
         <div className=" space-y-2">
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-xl font-bold">{date}</p>
            <p className="text-xl font-medium">{category}</p>
         </div>
         <div>
            <Link to={`/Posted-job/update/${_id}`}><BsPenFill className="text-2xl mb-12 text-success" /></Link>
            <RiDeleteBin6Line className="text-2xl text-error" onClick={() => handleDelete(_id)} />
         </div>
      </div>
   );
};

export default PostedCard;