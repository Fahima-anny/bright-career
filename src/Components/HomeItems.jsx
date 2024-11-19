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

          <div data-aos="fade-left">
          <Banner></Banner>
          </div>

            <div id='services' data-aos="fade-right" className="max-w-7xl mx-auto pt-20">
                <ServicesSection></ServicesSection>
            </div>

            <div className="max-w-7xl mx-auto py-20 px-3 md:px-0" data-aos="fade-left">
               <Counselors></Counselors>
            </div>

            <div className="max-w-7xl mx-auto py-20 px-3 md:px-0" data-aos="fade-right">
            <FAQSection></FAQSection>
            </div>

        </div>
    );
};

export default HomeItems;