import { AiOutlineMenu } from "react-icons/ai"
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"


const Navbar = () => {

   const navlinks = <>
      <NavLink to="/" className={({ isActive }) => isActive ? "bg-green-300 rounded-lg" : ""}>
         <li className="p-2 font-medium">Home</li>
      </NavLink>
      <NavLink to="/add-job" className={({ isActive }) => isActive ? "bg-green-300 rounded-lg" : ""}>
         <li className="p-2 font-medium">Add Job</li>
      </NavLink>
      <NavLink to="/Posted-job" className={({ isActive }) => isActive ? "bg-green-300 rounded-lg" : ""}>
         <li className="p-2 font-medium">Posted Job</li>
      </NavLink>
      <NavLink to="/my-bid" className={({ isActive }) => isActive ? "bg-green-300 rounded-lg" : ""}>
         <li className="p-2 font-medium">My Bids</li>
      </NavLink>
      <NavLink to="/bid-request" className={({ isActive }) => isActive ? "bg-green-300 rounded-lg" : ""}>
         <li className="p-2 font-medium">Bid Request</li>
      </NavLink>
   </>

   return (
      <div className="bg-base-200">
         <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <AiOutlineMenu className=" text-2xl" />
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navlinks}
                  </ul>
               </div>
               <Link to="/"><img src={logo} className="w-32 rounded-lg" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
               <ul className="menu menu-horizontal px-1">
                  {navlinks}
               </ul>
            </div>
            <div className="navbar-end">
               <Link to="/login"><button className="btn btn-success">Login</button></Link>
               {/* <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn m-1">Click</label>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                     <li><a>Item 1</a></li>
                     <li><a>Item 2</a></li>
                  </ul>
               </div> */}
            </div>
         </div>
      </div>
   );
};

export default Navbar;