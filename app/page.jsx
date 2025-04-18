import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
// import connectDB from "@/config/database";

const HomePage = () => {
//   connectDB(); // Connect to the database
return <>
    
    <Hero />
    <InfoBoxes />
    <HomeProperties />
    
    </>
}
 
export default HomePage;