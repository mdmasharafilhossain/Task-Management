import { AiOutlineCheck } from "react-icons/ai";

const Beneficial = () => {
    return (
        <div className="mt-20 mb-10 container mx-auto">
           <h1 className="text-5xl text-sky-600  text-center font-bold  mb-12 py-4">Who Beneficial?</h1>
           <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-5"> 
                 <h1 className="border-2 rounded-lg w-32 text-center text-2xl font-bold text-sky-500 p-5 px-1"><span></span>Student</h1>
                 <h1 className="border-2 rounded-lg w-32 text-center text-2xl font-bold text-sky-500 p-5 px-1"><span></span>Developer</h1>
                 <h1 className="border-2 rounded-lg w-32 text-center text-2xl font-bold text-sky-500 p-5 px-1"><span></span>Teacher</h1>
                 <h1 className="border-2 rounded-lg w-32 text-center text-2xl font-bold text-sky-500 p-5 px-1"><span></span>Worker</h1>
                 <h1 className="border-2 rounded-lg w-32 text-center text-2xl font-bold text-sky-500 p-5 px-1"><span></span>Doctor</h1>
           </div>
        </div>
    );
};

export default Beneficial;