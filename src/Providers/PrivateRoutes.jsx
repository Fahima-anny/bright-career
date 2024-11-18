import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";


// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {

const location = useLocation() ;
const {user, loading} = useContext(AuthContext) ;
    // console.log(pathname)

    if(loading){
        return <Loading></Loading>
    }

if(user && user.email){
    return children ;
}

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;