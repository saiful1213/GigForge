import { useLoaderData, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import UseApi from "../../Hooks/UseApi"
import { toast } from "react-toastify";

const Job_Detail = () => {
   const data = useLoaderData()
   const { email, title, date, minPrice, maxPrice, description } = data;
   const { user } = UseAuth();
   const axios = UseApi()
   const navigate = useNavigate();

   const handleBidInfo = e => {
      e.preventDefault();
      const form = e.target;
      const price = form.price.value;
      const date = form.date.value;
      const bidderEmail = form.bidderEmail.value;
      const buyerEmail = form.buyerEmail.value;
      const title = form.title.value;
      const bidderInfo = { price, date, bidderEmail, buyerEmail, title };

      axios.post('/bid-info', bidderInfo)
         .then(res => {
            if (res.data.acknowledged) {
               toast.success('you bid succesfully')
               navigate('/my-bid')
            } else {
               toast.error('something went wrong')
            }
         })
   }

   return (
      <div className="mt-28 flex">
         <div className="w-1/2">
            <h1 className="font-bold text-4xl text-center mb-8">Job Info</h1>
            <div className="w-96 mx-auto space-y-3 border rounded-xl shadow-xl p-7">
               <h1 className="text-4xl font-bold">{title}</h1>
               <p className="font-medium">Deadline: {date}</p>
               <p className="font-bold">Price: ${minPrice} - ${maxPrice}</p>
               <p className="text-justify">{description}</p>
            </div>
         </div>
         <div className="w-1/2">
            <h1 className="font-bold text-4xl text-center">Place Your Bid</h1>
            <div className="mb-12">
               <form className="card-body" onSubmit={handleBidInfo}>

                  <div className="flex gap-2">
                     <div className="form-control w-1/2">
                        <label className="label">
                           <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder="place your bidding amount" className="input input-bordered" required />
                     </div>

                     <div className="form-control w-1/2">
                        <label className="label">
                           <span className="label-text">Deadline</span>
                        </label>
                        <input type="text" name="date" placeholder="place your deadline" className="input input-bordered" required />
                     </div>
                  </div>

                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input type="email" name="bidderEmail" defaultValue={user?.email} className="input input-bordered" required readOnly />
                  </div>

                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Buyer Email</span>
                     </label>
                     <input type="email" name="buyerEmail" placeholder="email" value={email} className="input input-bordered" required readOnly />
                  </div>

                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Job Title</span>
                     </label>
                     <input type="text" name="title" defaultValue={title} readOnly className="input input-bordered" />
                  </div>

                  <div className="form-control mt-6">
                     <button disabled={email === user?.email ? true : false} className="btn btn-success">Bid On The Project</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Job_Detail;