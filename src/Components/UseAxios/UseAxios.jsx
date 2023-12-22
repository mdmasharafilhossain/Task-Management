import axios from "axios";


const Useaxios = axios.create({
    baseURL:'http://localhost:5000'
})

const UseAxios = () => {
    
    return Useaxios;
};

export default UseAxios;