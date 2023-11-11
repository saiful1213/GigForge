import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.jpg"
import { FcGoogle } from "react-icons/fc"
import UseAuth from "../../Hooks/UseAuth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

const Register = () => {

   const { registerUser, googleLogin, setUser } = UseAuth();
   const navigate = useNavigate()

   const handleSubmit = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const url = form.url.value;

      if (password.length < 6) {
         return toast.error('password should be 6 charecters of more')
      }

      registerUser(email, password)
         .then((result) => {
            updateProfile(result.user, {
               displayName: name,
               photoURL: url
            })
               .then(() => setUser({
                  displayName: name,
                  photoURL: url
               }))
            toast.success('successfully register')
            navigate('/')
         })
         .catch(() => toast.error('something went wrong'))
   }

   const handleGoogleRegister = () => {
      googleLogin()
         .then(() => {
            toast.success('succesfully register')
            navigate('/')
         })
         .catch(() => toast.error('something went wrong'))
   }

   return (
      <div className="w-[80vw] mx-auto mt-12">
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
                  <span><button className="btn btn-ghost btn-active" onClick={handleGoogleRegister}>
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