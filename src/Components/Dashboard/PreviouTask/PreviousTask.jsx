import { useQuery } from "@tanstack/react-query";
import UseAxios from "../../UseAxios/UseAxios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";


const PreviousTask = () => {
    const { user } = useContext(AuthContext);
    const Axios = UseAxios();
    const {  data: task = [] } = useQuery({
        queryKey: ['task',user?.email],
        
        queryFn: async () => {
            const res = await Axios.get(`/tasks/user/${user?.email}`);
            console.log(res.data)
            return res.data;

        }

    })
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
                         <h1 className="font-bold ">Due: {work.deadline}</h1>
                         <p className="border-2 rounded-lg text-white bg-sky-500 p-2 font-bold">{work.priority}</p>
                       </div>

                       {/* button div */}
                       <div className="flex gap-5 mt-5">

                        <button className="btn w-full flex-1 bg-sky-500 text-white">Delete Task</button>
                        <button className="btn w-full flex-1  bg-sky-500 text-white" >Update Task</button>

                       </div>
                   </div>



                </div>)
            }
           </div>
        </div>
    );
};

export default PreviousTask;