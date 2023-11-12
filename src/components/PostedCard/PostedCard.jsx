/* eslint-disable react/prop-types */
import { BsPenFill } from "react-icons/bs"
import { RiDeleteBin6Line } from "react-icons/ri"

const PostedCard = ({ data }) => {
   const { title, date, category } = data;
   return (
      <div className="flex border p-6 rounded-xl shadow-lg justify-between">
         <div className=" space-y-2">
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-xl font-bold">{date}</p>
            <p className="text-xl font-medium">{category}</p>
         </div>
         <div>
            <BsPenFill className="text-2xl mb-12 text-success" />
            <RiDeleteBin6Line className="text-2xl text-error" />
         </div>
      </div>
   );
};

export default PostedCard;