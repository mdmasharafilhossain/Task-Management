import axios from "axios";


const Useaxios = axios.create({
    // baseURL:'https://task-hub-server-six.vercel.app'
    baseURL:'http://localhost:5000'
})

const UseAxios = () => {
    
    return Useaxios;
};

export default UseAxios;