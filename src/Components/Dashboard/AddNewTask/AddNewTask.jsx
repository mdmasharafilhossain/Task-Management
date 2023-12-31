import { useForm } from "react-hook-form"
import UseAxios from "../../UseAxios/UseAxios";
import Swal from "sweetalert2";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";

const AddNewTask = () => {
    useEffect(()=>{
        document.title = "TaskHub | Create New Task"
      },[]);
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const Axios = UseAxios();
    const onSubmit = (data) => {
     
    console.log(data);

    const TaskInfo = {
        title:data.title,
        deadline:data.deadline,
        description:data.description,
        email:user?.email,
        priority:data.priority

    }

    console.log(TaskInfo);

    Axios.post('/tasks',TaskInfo)
    .then(res=>{
        console.log(res.data);
        if(res.data.insertedId){
            Swal.fire({
                title: "Done",
                text: "Create New Task Successfully",
                icon: "success"
              });
        }
        if(res.data.insertedId === null){
            Swal.fire({
                title: "Already Exists",
                text: "Task Already Exists",
                icon: "error"
              });
        }
    })


    }
    return (
        <div className="mt-5">
            <div className="mx-auto text-center  ">
                <h1 className="text-5xl text-sky-600  text-center font-bold  mb-12 py-4">Add Task</h1>

                <div>
                <form className="container mx-auto space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="flex gap-5">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Title</span>
                            
                        </div>
                        <input 
                        {...register("title")}
                         type="text" 
                         placeholder="Write Title of your task"  required
                         className="input input-bordered w-full border-2 border-sky-600" />
                        
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Deadlines</span>
                            
                        </div>
                        <input 
                        {...register("deadline")}
                         type="date" 
                         placeholder="Name Of The Article Title"  required
                         className="input input-bordered w-full border-2 border-sky-600" />
                        
                    </label>
                    </div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Description</span>
                            
                        </div>
                        <input 
                        {...register("description")}
                         type="text" 
                         placeholder="Description Of The Article Title"  required
                         className="input input-bordered w-full border-2 border-sky-600" />
                        
                    </label>
                    <div className="flex gap-5">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Email</span>
                            
                        </div>
                        <input 
                        {...register("email")}
                         type="email" 
                         defaultValue={user?.email}
                         readOnly
                         placeholder="Write Your Email"  required
                         className="input input-bordered w-full border-2 border-sky-600" />
                        
                    </label>
                    <select {...register("priority")}
                        className="select select-bordered w-full mt-9 border-2 border-sky-600">
                        <option disabled selected>Select Priority</option>
                        <option value="High">High</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Low">Low</option>
                        

                    </select>
                    </div>
                    
                    <div>
                    <input className="btn w-full   bg-sky-600 text-white" type="submit" />
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default AddNewTask;