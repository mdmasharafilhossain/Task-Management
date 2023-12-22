import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";
import UseAxios from "../UseAxios/UseAxios";
import { useQuery } from "@tanstack/react-query";


const ShowModal = () => {
    const { user } = useContext(AuthContext);
    const Axios = UseAxios();
    const {  data: task = [] } = useQuery({
        queryKey: ['task',user?.email],
        
        queryFn: async () => {
            const res = await Axios.get(`/tasks/user/${user?.email}`);
            console.log(res.data)
            return res.data;

        }

    });
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleCloseModal = () =>{
        setShow(false)
    }

    return (
        <div>
           <div>

{show && (

    <div>


        <div className="card w-full md:w-1/2 lg:w-1/4 mx-auto   bg-red-600 text-center h-[500px] border fixed bottom-0 z-10  shadow-2xl">

            <div className="card-body ">
                <h2 className="font-bold text-white text-center lg:text-xl ">Complete Your Task Now</h2>
                <div >
                    <h1 className="text-white">Your Tasks Remaining : <span className="font-bold text-lg">{task.length}</span> </h1>
                    <div className="mt-10">
                        {
                            task.map(work => <div key={work._id}>
                            
                            <div className="flex justify-around font-bold text-white text-xl">
                               
                               <div>
                                  <h1>{work.title}</h1>
                               </div>
                               <div>
                                   <h1 className="">Due : {work.deadline}</h1>
                               </div>
                            </div>

                            </div>)
                        }
                    </div>
                </div>

                <div className=" ">
                    <Link to="/dashboard/previous"><button className="btn bg-sky-600 w-full mt-10 text-white">Go To Task</button></Link>
                </div>
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={handleCloseModal}
                    className="btn w-full">Close</button>
                </form>
            </div>
        </div>


    </div>
)}
</div> 
        </div>
    );
};

export default ShowModal;