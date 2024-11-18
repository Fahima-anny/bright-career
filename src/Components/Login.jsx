/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";


const Login = () => {

  const {loginUserWithEmPass, loginWithGoogle} = useContext(AuthContext) ;

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target ;
        const email = form.email.value ;
        const pass = form.pass.value ;
        console.log( email, pass) ;

        // login user 
        loginUserWithEmPass(email, pass)
        .then(res => {
          console.log(res.user)
          toast("Login Successful")
      })
      .catch(er => {
          console.error(er)
          toast.error("Invalid email or password")
      })
      };
    

      const handleGoogleLogin = () => {
// login with google 
        loginWithGoogle()
        .then(res => {
          console.log(res.user)
          toast("Login Successful")
      })
      .catch(er => {
          console.error(er)
          toast.error(er.message)
      })

      };

      const handleTogglePassword = () => {
        setShowPassword(!showPassword);
      };

    return (
        <div>
             <div className="flex justify-center items-center min-h-screen bg-gray-100 py-5">
      <div className="card w-full max-w-sm shadow-lg bg-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Login </h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mb-4 relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="pass"
              placeholder="Enter your password"
              className="input input-bordered w-full pr-12"
              required
            />
            <Link to='/forgetPassword' className="mt-2 text-accent font-medium 
            hover:underline">Forgot Password?</Link>
            {/* Eye Icon */}
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute right-3 top-12 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          {/* Login Button */}
          <div className="form-control mb-4">
            <button className="btn btn-accent text-white w-full">Login</button>
          </div>
        </form>

        {/* Login with Google */}
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-accent w-full"
        >
          Login with Google
        </button>
        {/* // eslint-disable-next-line react/no-unescaped-entities, react/no-unescaped-entities */}
        <p className="text-center mt-2">Don't have an account? <Link to='/register' className="font-semibold text-accent hover:underline">Register</Link></p>
      </div>
    </div>
        </div>
    );
};

export default Login;