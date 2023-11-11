import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
   return (
      <div>
         <Navbar></Navbar>
         <div className="min-h-[60vh] max-w-7xl mx-auto">
            <Outlet></Outlet>
            <ToastContainer />
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Root;