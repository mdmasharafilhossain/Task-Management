import { NavLink } from "react-router-dom";
import logo from '../../assets/62ec0ed2413e5264826c4850_TaskHub_Horizontal_Logo.png'

const Navbar = () => {

    const NavLinks = <>
    <li><NavLink
            to="/" style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black border-2 border-sky-600" : ""
            }
        >
            Home
        </NavLink></li>
    <li><NavLink
            to="/register" style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black border-2 border-sky-600" : ""
            }
        >
            Register
        </NavLink></li>
    <li><NavLink
            to="/dashboard" style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black border-2 border-sky-600" : ""
            }
        >
            Dashboard
        </NavLink></li>
    
    
    
    </>


    return (
        <div>
            <div className='shadow-lg bg-base-100 fixed top-0 left-0 right-0 z-50'>
                <div className="navbar bg-base-100 container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                             {NavLinks}
                            </ul>
                        </div>
                        <img className='h-10' src={logo} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal  px-1">
                            {NavLinks}
                        </ul>
                    </div>
                    <div className="navbar-end flex lg:mr-5 lg:space-x-1">
                        <div>
                            <button>Sign In</button>
                        </div>
                    {/* <div>
                            <h2 className="mt-4 text-base font-bold text-orange-600-600">{user?.displayName

                            }</h2>
                        </div> */}
                        <div>
                        {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <Link to="/UserProfile"><div className="w-12 rounded-full mt-3">
                                        <img src={user?.photoURL} />
                                    </div></Link>
                                </label> */}
                        </div>
                        <div>
                       {/* {
                        user? 
                        <button onClick={handleLogOut} className=" text-red-700 border-4 border-red-600
                        hover:bg-red-100 font-bold text-lg px-4 py-2 rounded-xl">
                            SignOut</button>
                        : 
                        <Link to="/login"><button className=" text-red-700 border-4 border-red-600
                        hover:bg-red-100 font-bold text-lg px-4 py-2 rounded-xl">Sign In</button></Link>
                       } */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;