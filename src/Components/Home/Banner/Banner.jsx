import { Link } from 'react-router-dom';
import banner from '../../../assets/analysis_financial_activities_4.jpg'

const Banner = () => {
    return (
        <div className='mt-10'>
            
            <div className="hero h-[910px]" style={{backgroundImage: `url(${banner})`}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl text-black  font-bold">You Are In Problem For Task Management?</h1>
     
      <Link to="/dashboard"><button className="btn btn-primary bg-sky-500 border-none hover:bg-sky-700 text-xl">Let's Explore</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;