import { toast } from "react-toastify";
import UseApi from "../../Hooks/UseApi";
import UseAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Add_Job = () => {
   const { user } = UseAuth();
   const axios = UseApi()
   const navigate = useNavigate()

   const handleAddJob = e => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const title = form.title.value;
      const date = form.date.value;
      const category = form.category.value;
      const minPrice = form.minPrice.value;
      const maxPrice = form.maxPrice.value;
      const description = form.desc.value;

      const jobInfo = { email, title, date, category, minPrice, maxPrice, description }

      axios.post('/jobs', jobInfo)
         .then(res => {
            if (res.data.acknowledged) {
               toast.success('job posted succesfully')
               navigate('/posted-job')
            }
         })
         .catch(err => {
            console.log(err)
         })
   }


   return (
      <div className="mt-12">
         <Helmet>
            <title>GigForge | Add Job</title>
         </Helmet>
         <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
               <h2 className="mb-4 text-3xl font-bold text-gray-900 text-center">Add a Job</h2>
               <form onSubmit={handleAddJob}>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                     <div className="w-full">
                        <label type="email" className="block mb-2 text-sm font-medium text-gray-900">Emial</label>
                        <input type="email" defaultValue={user?.email} name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="employer email" readOnly />
                     </div>
                     <div className="w-full">
                        <label type="brand" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                        <input type="text" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Job Title" required="" />
                     </div>
                     <div className="w-full">
                        <label type="brand" className="block mb-2 text-sm font-medium text-gray-900 ">Deadline</label>
                        <input type="date" name="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                     </div>
                     <div>
                        <label type="category" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" name="category">
                           <option defaultValue="Web_Development">Web Development</option>
                           <option value="Digital_Marketing">Digital Marketing</option>
                           <option value="Graphics_Design">Graphics Design</option>
                        </select>
                     </div>
                     <div className="w-full">
                        <label type="price" className="block mb-2 text-sm font-medium text-gray-900 ">Minimum Price</label>
                        <input type="number" name="minPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="$2999" required="" />
                     </div>
                     <div className="w-full">
                        <label type="price" className="block mb-2 text-sm font-medium text-gray-900 ">Maximum Price</label>
                        <input type="number" name="maxPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="$2999" required="" />
                     </div>

                     <div className="sm:col-span-2">
                        <label type="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                        <textarea rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 resize-none" placeholder="Your description here" name="desc"></textarea>
                     </div>
                  </div>
                  <button type="submit" className="btn btn-success w-full mt-8">
                     Add Job
                  </button>
               </form>
            </div>
         </section>
      </div>
   );
};

export default Add_Job;