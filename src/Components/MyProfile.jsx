import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";


const MyProfile = () => {

const {user, updateUserProfile} = useContext(AuthContext) ;
console.log(user)
const [userName, setUserName] = useState(user.displayName)

const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target ;
    const name = form.name.value ;
    const photo = form.photo.value ;
    console.log( name, photo) ;

// update user info 
updateUserProfile({ displayName: name, photoURL: photo })
.then(() => {
    toast.success("Profile Successfully updated")
setUserName(name)
    // navigate("/")
})
.catch((er) => {
    console.log(er)
})

  };

    return (
        <div className="max-w-7xl mx-auto py-24 px-3 md:px-0">
             <Helmet>
                <title>Bright Career | My Profile</title>
            </Helmet>


<div className="grid md:grid-cols-2 gap-16">

                <div className=" text-center bg-base-200 rounded-2xl p-5 space-y-3">
      <h1 className="text-3xl text-center font-bold pb-8">My Profile</h1>
      <p className="grid md:grid-cols-2 text-left">
<span className="font-bold text-xl">User Name :</span> {userName}
      </p>
      <p className="grid md:grid-cols-2 text-left">
<span className="font-bold text-xl">Email Address :</span> {user?.email}
      </p>
      <p className="grid md:grid-cols-2 text-left">
<span className="font-bold text-xl">Photo URL :</span> {user?.photoURL}
      </p>
    </div>


              <form onSubmit={handleSubmit} className="card-body p-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Enter your Photo url" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent text-white">Update Profile</button>
        </div>
      </form>
</div>
        </div>
    );
};

export default MyProfile;