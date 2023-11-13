import { useLoaderData, useNavigate } from "react-router-dom";
import UseApi from "../../Hooks/UseApi";
import { toast } from "react-toastify";

const UpdateJob = () => {
   const data = useLoaderData();
   const axios = UseApi();
   const { _id, email, title, date, category, minPrice, maxPrice, description } = data;
   const navigate = useNavigate();

   const handleUpdateInfo = e => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const category = form.category.value;
      const title = form.title.value;
      const date = form.date.value;
      const minPrice = form.minPrice.value;
      const maxPrice = form.maxPrice.value;
      const desc = form.desc.value;
      const updateInfo = { email, category, title, date, minPrice, maxPrice, desc };


      axios.patch(`/jobs/updateInfo/${_id}`, updateInfo)
      .then(res =>{
         if(res.data.modifiedCount > 0){
            toast.success('you job is updated successfully')
            navigate('/Posted-job')
         }
      })
   }

   return (
      <div className="mt-28">
         <h1 className="text-center font-bold text-4xl">Update Your Product</h1>
         <form className="card-body w-1/2 mx-auto" onSubmit={handleUpdateInfo}>

            <div className="flex gap-2">
               <div className="form-control w-1/2">
                  <label className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" defaultValue={email} className="input input-bordered" required readOnly />
               </div>
               <div className="form-control w-1/2">
                  <label className="label">
                     <span className="label-text">Category</span>
                  </label>
                  <input type="text" name="category" defaultValue={category} className="input input-bordered" required />
               </div>
            </div>

            <div className="flex gap-2">
               <div className="form-control w-1/2">
                  <label className="label">
                     <span className="label-text">Job Title</span>
                  </label>
                  <input type="text" name="title" defaultValue={title} className="input input-bordered" />
               </div>

               <div className="form-control w-1/2">
                  <label className="label">
                     <span className="label-text">Deadline</span>
                  </label>
                  <input type="date" name="date" defaultValue={date} className="input input-bordered" required />
               </div>
            </div>

            <div className="flex gap-2">
               <div className="form-control w-1/2">
                  <label className="label">
                     <span className="label-text">Minimum Price</span>
                  </label>
                  <input type="number" name="minPrice" defaultValue={minPrice} placeholder="place your bidding amount" className="input input-bordered" required />
               </div>
               <div className="form-control w-1/2">
                  <label className="label">
                     <span className="label-text">Maximum Price</span>
                  </label>
                  <input type="number" name="maxPrice" defaultValue={maxPrice} placeholder="place your bidding amount" className="input input-bordered" required />
               </div>
            </div>

            <div className="form-control">
               <label className="label">
                  <span className="label-text">Description</span>
               </label>
               <textarea name="desc" cols="30" rows="5" className="border-2 p-4 resize-none" defaultValue={description}></textarea>
            </div>

            <div className="form-control mt-6">
               <button className="btn btn-success">Update</button>
            </div>
         </form>
      </div>
   );
};

export default UpdateJob;