import { NavLink,Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <div className="flex">
               {/* main part  */}
               <div className="w-64 min-h-screen bg-sky-500">
               <ul className="menu p-4 py-auto"> 
                <li className="font-bold text-xl text-white"><NavLink to="/dashboard/newTask">Add New Task</NavLink></li>
                <li className="font-bold text-xl text-white"><NavLink to="/">Go Home</NavLink></li>
                
           </ul>
               </div>
               {/* outlet div */}
               <div>
                <Outlet></Outlet>
               </div>
            </div>
        </div>
    );
};

export default Dashboard;