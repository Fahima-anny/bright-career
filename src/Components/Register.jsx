
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";


const Register = () => {

    const { createNewUser, loginWithGoogle, setUser, updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert("Logged in with email and password!");
        setError(null)

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.pass.value;
        const photo = form.photo.value;
        // console.log(name, email, pass, photo);

        // check if has 6 Characters 
        if (pass.length < 6) {
            toast.error("Your password must contain 6 characters or more")
            setError("Password must be at least 6 characters")
            return;
        }

        // check if has uppercase
        const regexUpper = /[A-Z]/;
        if (!regexUpper.test(pass)) {
            toast.error("Add a uppercase letter in your password")
            setError("No uppercase letter in your password")
            return;
        }

        // check if has lowercase
        const regexLower = /[a-z]/;
        if (!regexLower.test(pass)) {
            toast.error("Add a lowercase letter in your password")
            setError("No lowercase letter in your password")
            return;
        }

        // create new user 
        createNewUser(email, pass)
            .then(res => {
                // console.log(res.user)
                toast.success("user account created successfully");
                setUser(res.user)
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/")
                    })
                    .catch((er) => {
                        toast(er.message)
                    })
            })
            .catch(er => {
                // console.error(er)
                toast.error(er.message)
            })

        // form.reset() ;
    };

    const handleGoogleLogin = () => {
        // login with google 
        loginWithGoogle()
            .then(() => {
                toast("Account Created")
                navigate("/")
            })
            .catch(er => {
                toast.error(er.message)
            })
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    // console.log("user is: ", user)

    return (
        <div className="">
              <Helmet>
                <title>Bright Career | Register</title>
            </Helmet>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 py-5">
                <div data-aos="fade-right" className="card w-full max-w-md shadow-lg bg-white p-6 rounded-lg mx-3 md:mx-0">
                    <h2 className="text-2xl font-bold text-center mb-4">Register </h2>
                    <form onSubmit={handleSubmit}>
                        {/* name Input */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

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

                        {/* photo Input */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Enter your photo URL"
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

                            {/* Eye Icon */}
                            <button
                                type="button"
                                onClick={handleTogglePassword}
                                className="absolute right-3 top-12 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                        </div>

                        <p className="text-center mb-2 text-red-500 font-medium">
                            {error ?
                                error
                                : ""
                            }
                        </p>

                        {/* Login Button */}
                        <div className="form-control mb-4">
                            <button className="btn btn-accent text-white w-full">Register</button>
                        </div>
                    </form>

                    {/* Login with Google */}

                    <button
                        onClick={handleGoogleLogin}
                        className="btn btn-outline btn-accent w-full"
                    >
                        Login with Google
                    </button>
                    {/* // eslint-disable-next-line react/no-unescaped-entities, react/no-unescaped-entities */}
                    <p className="text-center mt-2">Already have an account? <Link to='/login' className="font-semibold text-accent hover:underline">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;