import { NavLink,Outlet } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { GrPrevious } from "react-icons/gr";
import { FiAlignJustify } from "react-icons/fi";
const Dashboard = () => {
    return (
        <div>
            <div className="flex">
               {/* main part  */}
               {/* className="w-64 min-h-screen bg-sky-500" */}
               <div >
               
           <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn  bg-sky-500 drawer-button lg:hidden"><FiAlignJustify /></label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-sky-600 text-base-content">
      {/* Sidebar content here */}
      <ul className="menu p-4 py-auto"> 
                <li className="font-bold text-xl text-white"><NavLink to="/dashboard/newTask"><IoMdAdd  className="text-xl font-bold"/>Create New Task</NavLink></li>
                <li className="font-bold text-xl text-white"><NavLink to="/"><GrPrevious />Previous Task</NavLink></li>
                <li className="font-bold text-xl ml-1 text-white"><NavLink to="/"><FaHome />Go Home</NavLink></li>
                
                
           </ul>
    </ul>
  
  </div>
</div>

               </div>
               {/* outlet div */}
               <div className="flex-1">
                <Outlet></Outlet>
               </div>
            </div>
        </div>
    );
};

export default Dashboard;