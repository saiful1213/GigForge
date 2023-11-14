import { AiOutlineMenu } from "react-icons/ai"
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import UseAuth from "../Hooks/UseAuth";
import { toast } from "react-toastify";


const Navbar = () => {
   const { user, logout } = UseAuth();

   const handleLogout = () =>{
      logout()
      .then(()=> toast.success('logout successfully'))
      .catch(()=> toast.error('something went wrong'))
   }

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

   let prevScrollpos = window.scrollY;
   window.onscroll = function () {
      const currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
         document.getElementById("navbar").style.top = "0";
      } else {
         document.getElementById("navbar").style.top = "-80px";
      }
      prevScrollpos = currentScrollPos;
   }

   return (
      <div className="bg-base-300 w-full fixed top-0 block" style={{ transition: 'top 0.3s' }} id="navbar">
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
               {
                  user ?
                     <div className="dropdown dropdown-end">
                        <div className="avatar">
                           <div className="w-12 rounded-full m-1" tabIndex={0}>
                              <img src={user?.photoURL}/>
                           </div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                           <li className="text-xl font-bold my-3">{user?.displayName}</li>
                           <button className="btn btn-success" onClick={handleLogout}>Logout</button>
                        </ul>
                     </div>
                     :
                     <Link to="/login"><button className="btn btn-success">Login</button></Link>
               }
            </div>
         </div>
      </div>
   );
};

export default Navbar;