import { Navigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './../AuthProviders/AuthProviders';


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    
    if(loading){
        return <span className="loading loading-spinner loading-lg text-orange-600 mt-96 ml-96"></span>
    }
    if(user){
        return children;
    }
    return <Navigate  to="/login"></Navigate>
};

export default PrivateRoutes;