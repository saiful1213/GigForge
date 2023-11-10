import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
   return (
      <div>
         <Navbar></Navbar>
         <div className="min-h-[60vh] max-w-7xl mx-auto">
            <Outlet></Outlet>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Root;