import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { FaFacebookSquare } from "react-icons/fa"
import { SiTwitter } from "react-icons/si"
import { FaYoutube } from "react-icons/fa"

const Footer = () => {
   return (
      <div className="bg-base-300 mt-6">
         <footer className="footer py-10 px-10 md:px-0 max-w-7xl mx-auto text-base-content">
            <aside>
               <Link to="/"><img src={logo} className="w-32 rounded-lg" /></Link>
               <p>Copyright © 2023  <br /> All right reserved by GigForge Industries Ltd</p>
            </aside>
            <nav>
               <header className="footer-title">Contact Info</header>
               <a className="link link-hover">GigForge@gmail.com</a>
               <a className="link link-hover">+0123456789</a>
            </nav>
            <nav>
               <header className="footer-title">Social Links</header>
               <div>
                  <p className="flex items-center gap-3 link link-hover mb-2">
                     <FaFacebookSquare className="text-xl" />
                     Facebook
                  </p>
                  <p className="flex items-center gap-3 link link-hover mb-2">
                     <SiTwitter className="text-xl" />
                     Twitter
                  </p>
                  <p className="flex items-center gap-3 link link-hover mb-2">
                     <FaYoutube className="text-xl" />
                     Youtube
                  </p>


               </div>
            </nav>
            <nav>
               <header className="footer-title">Address</header>
               <a className="link link-hover">Khagracharri</a>
               <a className="link link-hover">Street: 11/A, XYZ</a>
               <a className="link link-hover">Bangladesh</a>
            </nav>
         </footer>
      </div>
   );
};

export default Footer;