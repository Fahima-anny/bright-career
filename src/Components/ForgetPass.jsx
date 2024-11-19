import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";


const ForgetPass = () => {

const {resetEmail, resetPass} = useContext(AuthContext) ;
// console.log(resetEmail)

const handleSubmit = e => {
    e.preventDefault() ;

// send reset email 
resetPass(resetEmail)
.then(() => {
    toast("Please Check your email to reset password")
})
.catch(er => {
    toast.error(er.message)
})
}

    return (
        <div className="px-3 md:px-0">
              <Helmet>
                <title>Bright Career | Reset Password</title>
            </Helmet>
           <div className="max-w-md mx-auto min-h-[35vh] my-20">
           <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" defaultValue={resetEmail} required />
        </div>
        <div className="form-control mt-4">
          <button className="btn btn-accent text-white">Reset Password</button>
        </div>
      </form>
           </div>
        </div>
    );
};

export default ForgetPass;