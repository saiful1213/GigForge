import img from "../../assets/img.webp"
import { BsCheckCircle } from "react-icons/bs"

const Best_part = () => {
   return (
      <div className="flex items-center justify-between my-32 flex-col md:flex-row px-8 gap-6">
         <div className="lg:w-2/5">
            <h1 className="font-semibold text-4xl">The best part? Everything.</h1>
            <div>
               <div className="flex items-center gap-3 mt-6">
                  <BsCheckCircle className="text-2xl" />
                  <h3 className="font-medium text-2xl">Stick to your budget</h3>
               </div>
               <p className="font-medium">Find the right service for every price point. No hourly rates, just project-based pricing.</p>
            </div>
            <div>
               <div className="flex items-center gap-3 mt-6">
                  <BsCheckCircle className="text-2xl" />
                  <h3 className="font-medium text-2xl">Get quality work done quickly</h3>
               </div>
               <p className="font-medium">Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
            </div>
            <div>
               <div className="flex items-center gap-3 mt-6">
                  <BsCheckCircle className="text-2xl" />
                  <h3 className="font-medium text-2xl">Pay when you're happy</h3>
               </div>
               <p className="font-medium">Upfront quotes mean no surprises. Payments only get released when you approve.</p>
            </div>
            <div>
               <div className="flex items-center gap-3 mt-6">
                  <BsCheckCircle className="text-2xl" />
                  <h3 className="font-medium text-2xl">Count on 24/7 support</h3>
               </div>
               <p className="font-medium">Our round-the-clock support team is available to help anytime, anywhere.</p>
            </div>
         </div>
         <div className="lg:w-1/2">
            <img src={img} />
         </div>
      </div>
   );
};

export default Best_part;