/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


 
const ServiceCard = ({service}) => {

 
const {serviceName, counselorName, mode, pricing, image, id} = service ;

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-md hover:shadow-2xl duration-500 ease-in mt-8 border">
  <figure className="">
  {/* <div className="hero-overlay "></div> */}
    <img
className="h-[250px] w-full object-cover object-center "
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-accent font-bold">{serviceName}</h2>
    <p className="font-semibold mb-2">Counselor: {counselorName}</p>

      <div className="font-semibold">Platform: {mode}</div>
      <div className="font-semibold">Price: <span className="text-accent text-2xl font-bold">{pricing}</span>/session</div>

    <div className="card-actions mt-2">
     <Link to={`/serviceDetails/${id}`} className="btn w-full btn-accent text-white">Learn More</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;