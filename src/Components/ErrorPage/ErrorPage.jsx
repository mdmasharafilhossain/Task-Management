import { Link } from 'react-router-dom';
import error from '../../assets/Screenshot (1312).png'

const ErrorPage = () => {
    return (
        <div>
            <div >
            <div className='lg:ml-96'>
            <img src={error} alt="" />
            </div>
            <div>
               <Link to="/"> <button  className='btn lg:ml-[850px] border-none btn-secondary bg-sky-500 hover:bg-sky-600'>Go To Home</button></Link>
            </div>
        </div> 
        </div>
    );
};

export default ErrorPage;