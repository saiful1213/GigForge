import { Link } from "react-router-dom";
import loginImg from "../../assets/login.jpg"
import { FcGoogle } from "react-icons/fc"

const Register = () => {

   const handleSubmit = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const url = form.url.value;
      console.log(name, email, password, url)
   }

   return (
      <div className="w-[80vw] mx-auto mt-6">
         <div className="flex items-center">
            <div className="w-1/2 ">
               <img src={loginImg} />
            </div>
            <div className=" w-1/2">
               <form className="card-body" onSubmit={handleSubmit}>
                  <h1 className="font-bold text-center text-3xl">Register here</h1>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Name</span>
                     </label>
                     <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">PhotoURL</span>
                     </label>
                     <input type="text" name="url" placeholder="photo URL" className="input input-bordered" required />
                  </div>
                  <div className="form-control mt-6">
                     <button className="btn btn-success">Register</button>
                  </div>
                  <p className="font-medium mt-4 text-center">Allready have an account? please <Link to="/login" className="text-blue-600 font-bold underline">Login</Link> </p>
               </form>
               <p className="font-bold justify-center flex items-center gap-3 mt-2">Register with
                  <span><button className="btn btn-ghost btn-active">
                     <FcGoogle size={'1.2rem'} />
                     Google
                  </button></span>
               </p>
            </div>
         </div>

      </div>
   );
};

export default Register;