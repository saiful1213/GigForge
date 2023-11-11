import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.jpg"
import { FcGoogle } from "react-icons/fc"
import UseAuth from "../../Hooks/UseAuth";
import { toast } from "react-toastify";

const Login = () => {
   const { login, googleLogin } = UseAuth()
   const navigate = useNavigate()

   const handleSubmit = e => {
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      login(email, password)
         .then(() => {
            toast.success('successfully login')
            navigate('/')
         })
         .catch(() => toast.error('invalid login credintial'))
   }

   const handleGoogleLogin = () => {
      googleLogin()
         .then(() => toast.success('succesfully register'))
         .catch(() => toast.error('invalid login credintial'))
   }

   return (
      <div className="w-[80vw] mx-auto mt-6">
         <div className="flex items-center">
            <div className="w-1/2 ">
               <img src={loginImg} />
            </div>
            <div className=" w-1/2">
               <form className="card-body" onSubmit={handleSubmit}>
                  <h1 className="font-bold text-center text-3xl">Login here</h1>
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
                  <div className="form-control mt-6">
                     <button className="btn btn-success">Login</button>
                  </div>
                  <p className="font-medium mt-4 text-center">Dont have an account? please <Link to="/register" className="text-blue-600 font-bold underline">Register</Link> </p>
               </form>
               <p className="font-bold justify-center flex items-center gap-3 mt-2">login with
                  <span><button className="btn btn-ghost btn-active" onClick={handleGoogleLogin}>
                     <FcGoogle size={'1.2rem'} />
                     Google
                  </button></span>
               </p>
            </div>
         </div>

      </div>
   );
};

export default Login;