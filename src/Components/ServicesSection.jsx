import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const ServicesSection = () => {

const services = useLoaderData() ;
// console.log(data)

    return (
        <div>
           <h1 className="text-center font-bold text-3xl">Available Services</h1>
           <p className="max-w-3xl mx-auto pt-3 text-gray-500 text-center">Explore our expert career counseling services which are designed to help you unlock your potential, refine skills,  achieve your goals</p>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-16">
            {
services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
            }
           </div>
        </div>
    );
};

export default ServicesSection;