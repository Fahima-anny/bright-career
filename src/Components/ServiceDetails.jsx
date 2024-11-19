import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {

    const [comments, setComments] = useState([])

const handleSubmit = e => {
    e.preventDefault() ;
    const text = e.target.text.value ;
    // console.log(text)
setComments([...comments, text])
// console.log(comments)
e.target.reset() ;
}

    const services = useLoaderData();
    const id = useParams();
    const idx = parseInt(id.id);

    const service = services.find(s => s.id === idx)

     
    const { image, serviceName, category, pricing,rating, counselorName, duration, mode, description, nextSchedule } = service;

    return (
        <div className="max-w-7xl px-3 md:px-0 mx-auto pt-10 pb-20" >
              <Helmet>
                <title>Bright Career | {serviceName}</title>
            </Helmet>
            <div className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-left">
                <div>
                    <img className="rounded-lg" src={image} alt="" />
                </div>
                <div>
                <div className="flex flex-col">
                <div className="card-body">
    <h2 className="card-title text-3xl text-accent font-bold">{serviceName}</h2>
    <div className="font-semibold">Category: {category}</div>
    <p className="font-semibold ">Counselor: {counselorName}</p>
<p className="text-gray-700">{description}</p>
      <div className="font-semibold">Platform: {mode}</div>
      <div className="font-semibold">Ratings: {rating}</div>
      <div className="font-semibold">Duration: {duration}</div>
      <div className="font-semibold">Next Schedule: {nextSchedule}</div>

      <div className="font-semibold">Price: <span className="text-accent text-2xl font-bold">{pricing}</span>/session</div>

    <div className="card-actions pt-3">
     <button className="btn w-full btn-accent text-white">Join Now</button>
    </div>
  </div>
                </div>
                </div>
            </div>

<div className=" grid md:grid-cols-2 gap-10" data-aos="fade-right">
<div>
<h1 className="text-center font-bold text-3xl mt-20 mb-3">All Comments</h1>
    <div>
{ 
    comments?.length > 0 ?
     comments.map( (c,idx) => <p
     className="text-center md:text-left bg-slate-100 rounded-xl p-3 mt-3 text-xl font-medium"
     key={idx}>{c}</p>)
     : <p className="text-center text-gray-400 md:mt-10">No comment found</p>
}
    </div>
</div>
<div>
<h1 className="text-center font-bold text-3xl md:mt-20 mb-3">Add a Comment</h1>
    <div>
    <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
        <textarea
        name="text"
  placeholder="Write Your Comment"
  className="textarea textarea-bordered textarea-lg w-full"></textarea>
        </div>
        <div className="form-control mt-2">
          <button className="btn w-auto mx-auto btn-accent text-white">Submit Comment</button>
        </div>
      </form>
    </div>
</div>
</div>

        </div>
    );
};

export default ServiceDetails;