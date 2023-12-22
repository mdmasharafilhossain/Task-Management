import Footer from "../../Footer/Footer";
import ShowModal from "../../ShowModal/ShowModal";
import Banner from "../Banner/Banner";
import Beneficial from "../Beneficial/Beneficial";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Beneficial></Beneficial>
          <ShowModal></ShowModal>
          <Footer></Footer>  
        </div>
    );
};

export default Home;