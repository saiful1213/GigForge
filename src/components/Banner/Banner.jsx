import { Link } from "react-router-dom";

const Banner = () => {
   return (
      <div className="bg-bgImgGradient lg:h-screen bg-cover bg-center px-4 mt-16">
         <div className="md:w-4/5 lg:w-3/5 flex flex-col justify-center h-full gap-7 py-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Connect. Collaborate. Conquer: Your Next Gig Awaits on GigForge!</h1>
            <p className="text-slate-100 ">Welcome to GigForge, the ultimate hub for freelancers and businesses alike. Unlock a world of opportunities as talent meets opportunity on our dynamic platform. Whether you are a skilled freelancer or in search of top-tier talent, GigForge is where collaborations turn into success stories. Join the future of work - seamless, efficient, and tailored just for you!</p>
            <div className="flex items-center">
               <Link to="/add-job"><button className="btn btn-success mr-5">Add Job</button></Link>
               <a href="#top_job"><button className="btn btn-success btn-outline">See Job</button></a>
            </div>
         </div>
      </div>
   );
};

export default Banner;