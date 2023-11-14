import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Top_Jobs from "../../components/Top_Jobs/Top_Jobs";
import Best_part from "../../components/Best_part/Best_part";
import FAQ from "../../components/FAQ/FAQ";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>GigForge | Home</title>
         </Helmet>
         <Banner></Banner>
         <Top_Jobs></Top_Jobs>
         <Best_part></Best_part>
         <FAQ></FAQ>
      </div>
   );
};

export default Home;