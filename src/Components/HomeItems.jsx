import Banner from "./Banner";
import ServicesSection from "./ServicesSection";


const HomeItems = () => {
    return (
            <div>
            <Banner></Banner>
           <div className="max-w-7xl mx-auto py-20">
           <ServicesSection></ServicesSection>
           </div>
           </div> 
    );
};

export default HomeItems;