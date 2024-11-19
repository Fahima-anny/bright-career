import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import ServicesSection from "./ServicesSection";
import Counselors from "./Counselors";
import FAQSection from "./FAQSection";


const HomeItems = () => {
    return (
        <div >
            <Helmet>
                <title>Bright Career | Home</title>
            </Helmet>
            <Banner></Banner>
            <div id='services' className="max-w-7xl mx-auto pt-20">
                <ServicesSection></ServicesSection>
            </div>
            <div className="max-w-7xl mx-auto py-20 px-3 md:px-0">
               <Counselors></Counselors>
               <FAQSection></FAQSection>
            </div>

        </div>
    );
};

export default HomeItems;