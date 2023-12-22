import { useQuery } from "@tanstack/react-query";
import UseAxios from "../../UseAxios/UseAxios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const PreviousTask = () => {
    useEffect(()=>{
        document.title = "TaskHub | All Task"
      },[]);
    const { user } = useContext(AuthContext);
    const Axios = UseAxios();
    const { refetch, data: task = [] } = useQuery({
        queryKey: ['task',user?.email],
        
        queryFn: async () => {
            const res = await Axios.get(`/tasks/user/${user?.email}`);
            console.log(res.data)
            return res.data;

        }

    });

     const handleDelete = work =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await Axios.delete(`/tasks/delete/${work._id}`);
                console.log(res.data);
            if(res.data.deletedCount){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Delete SuccessFully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            }
          });
     }


    return (
        <div>
           <h2 className="text-4xl text-sky-600 font-bold text-center mt-5">Total Task: {task.length}</h2> 

           <div className="grid gap-10 text-center mt-20 container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

            {
                task.map(work => <div className="border-2 p-5 border-sky-500" key={work._id}>

                   <div>
                      
                      <h1 className="text-3xl font-bold text-sky-500">{work.title}</h1>
                       <h2 className="text-xl mt-4">{work.description}</h2> 

                       <div className="flex justify-around mt-4">
                         <h1 className="font-bold text-lg">Due: {work.deadline}</h1>
                         <p className="border-2 rounded-lg text-white bg-sky-500 p-2 font-bold">{work.priority}</p>
                       </div>

                       {/* button div */}
                       <div className="flex gap-5 mt-5">

                        <button 
                        onClick={()=>handleDelete(work)}
                        className="btn w-full flex-1 bg-sky-500 text-white">Delete Task</button>
                        <Link
                        className="flex-1" to={`/update/${work._id}`}><button className="btn w-full flex-1 bg-sky-500 text-white">Update Details</button></Link>

                       </div>
                   </div>



                </div>)
            }
           </div>
        </div>
    );
};

export default PreviousTask;