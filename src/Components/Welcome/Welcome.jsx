import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";


const Welcome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>Welcome {user?.displayName}</h1>
        </div>
    );
};

export default Welcome;