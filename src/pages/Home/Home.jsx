import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Top_Jobs from "../../components/Top_Jobs/Top_Jobs";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>GigForge | Home</title>
         </Helmet>
         <Banner></Banner>
         <Top_Jobs></Top_Jobs>
      </div>
   );
};

export default Home;