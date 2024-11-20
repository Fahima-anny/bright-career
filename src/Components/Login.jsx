/* eslint-disable react/no-unescaped-entities */
import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";


const Login = () => {

  const {loginUserWithEmPass, loginWithGoogle, setResetEmail, setUser} = useContext(AuthContext) ;
    const [showPassword, setShowPassword] = useState(false);
const location = useLocation() ;
const navigate = useNavigate() ;
const emailRef = useRef() ;
// console.log(location)

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target ;
        const email = form.email.value ;
        const pass = form.pass.value ;
        // console.log( email, pass) ;

        // login user 
        loginUserWithEmPass(email, pass)
        .then((res) => {
          // console.log(res.user)
          toast("Login Successful")
          setUser(res.user)
         navigate(location?.state ? location.state : "/")
         
      })
      .catch(er => {
          // toast.error(er)
          toast.error(er.message)
      })
      };
    

      const handleGoogleLogin = () => {
// login with google 
        loginWithGoogle()
        .then(() => {
          // console.log(res.user)
          toast("Login Successful")
          navigate(location?.state ? location.state : "/")
      })
      .catch(er => {
          // toast.error(er)
          toast.error(er.message)
      })

      };

      const handleTogglePassword = () => {
        setShowPassword(!showPassword);
      };


      const handleForgot = () => {
          navigate('/forgetPassword')
        setResetEmail(emailRef.current.value)
// console.log(resetEmail)
      }

    return (
        <div>
            <Helmet>
                <title>Bright Career | Login</title>
            </Helmet>
             <div className="flex justify-center items-center min-h-screen bg-gray-100 py-5 px-3 md:px-0">
      <div data-aos="fade-right" className="card w-full max-w-sm shadow-lg bg-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Login </h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              ref={emailRef}
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
            <label onClick={handleForgot} className="mt-2 text-accent font-medium 
            hover:underline">Forgot Password?</label>
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