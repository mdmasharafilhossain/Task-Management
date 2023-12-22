import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxios from "../../../UseAxios/UseAxios";
import { useEffect } from "react";


const UpdateTask = () => {
    useEffect(()=>{
        document.title = "TaskHub | Update Task"
      },[]);
    const navigate = useNavigate();
    const Axios = UseAxios();
    const TaskCard = useLoaderData();
    console.log(TaskCard);
    const { _id } = useParams();
    
    const InfoCard = TaskCard.find(task =>task._id === _id);
   
    const hadndleUpdate = e =>{
        
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const UpdateProducts = {title,description}
        console.log(UpdateProducts);
          Axios.put(`/tasks/update/${InfoCard._id}`,UpdateProducts)
          .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Update Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate("/dashboard/previous")
            }
         })
    }
  
    
    return (
        <div className="mt-28">
           <h2 className="text-center text-3xl font-bold">Task Title: {InfoCard.title}</h2> 
           <form onSubmit={hadndleUpdate}>
                        <div className="flex flex-col container mx-auto md:flex-row lg:flex-row gap-5">
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <label className="input-group">

                                <input type="text" defaultValue={InfoCard.title} placeholder="Name" name="title" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">

                                <input type="text" defaultValue={InfoCard.description} placeholder="Brand Name" name="description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        
                    </div>
                    <button className="btn w-1/2 mt-10 lg:ml-[500px] container mx-auto">Update</button>
                        </form>
        </div>
    );
};

export default UpdateTask;