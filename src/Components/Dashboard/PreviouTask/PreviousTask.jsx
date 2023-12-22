import { useQuery } from "@tanstack/react-query";
import UseAxios from "../../UseAxios/UseAxios";


const PreviousTask = () => {
    const Axios = UseAxios();
    const {  data: task = [] } = useQuery({
        queryKey: ['task'],
        
        queryFn: async () => {
            const res = await Axios.get('/tasks');
            console.log(res.data)
            return res.data;

        }

    })
    return (
        <div>
           <h2>Previous Task{task.length}</h2> 
        </div>
    );
};

export default PreviousTask;