import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import app from "../../Firebase/Firebase";
import { Link,  useNavigate } from "react-router-dom";
const auth = getAuth(app);

const Login = () => {
    useEffect(()=>{
        document.title = "TaskHub | Login"
      },[]);
      const navigate = useNavigate();
    const {SignIn,SignInWithGoogle} = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = e =>{

         e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
          const password = form.get('password')
        SignIn(email,password)
        .then(result =>{
          console.log(result.user);
          Swal.fire({
              title: 'Log In',
              text: 'Log In Successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            navigate("/dashboard")
        })
        .catch(error =>{
          console.error(error);
          setErrorMessage(error.message)
  
        });
        
    }

    const hadleGoogleLogin = e =>{
        const googleProvider = new GoogleAuthProvider();
        e.preventDefault();
        SignInWithGoogle(auth,googleProvider)
        .then(result=>{
            console.log(result);
            navigate("/dashboard");
        })
        .catch(error =>{
            console.log(error);
        })
      }
    return (
        <div>
         <div className=" py-60">
            <div className="mt-[100px] md:mt-10 lg:mt-10 text-center   py-5">
                <h2 className="text-4xl font-bold text-sky-600">Please login</h2>

                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered border-2 border-sky-600" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password"
                        name="password" className="input input-bordered  border-2 border-sky-600" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-sky-600 border-none font-bold text-white text-base hover:bg-sky-700">Login</button>
                        
                       
                    </div>
                </form>
                <p className="font-bold mt-5 text-xl text-sky-700">OR</p>
                <button onClick={hadleGoogleLogin} className="btn btn-primary bg-sky-700 border-none mt-10 hover:bg-sky-900 text-white">Google Login</button>
                {
                    errorMessage && <p className="text-sm font-bold text-sky-700">{errorMessage}</p>
                }
                <p className="text-xl mt-10">New Here?Please <Link to="/register" className="font-bold text-sky-700">Register</Link></p>
            </div>








        </div>   
        </div>
    );
};

export default Login;