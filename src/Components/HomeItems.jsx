import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import ServicesSection from "./ServicesSection";


const HomeItems = () => {
    return (
        <div>
            <Helmet>
                <title>Bright Career | Home</title>
            </Helmet>
            <Banner></Banner>
            <div id='services' className="max-w-7xl mx-auto py-20">
                <ServicesSection></ServicesSection>
            </div>
        </div>
    );
};

export default HomeItems;