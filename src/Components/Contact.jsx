/* eslint-disable react/no-unescaped-entities */

import { Helmet } from "react-helmet-async";


const Contact = () => {
  return (
    <div className="">
      <Helmet>
        <title>Bright Career | Contacts</title>
      </Helmet>
      <div
       data-aos="fade-left"
        className="hero md:h-[70vh] border"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/dpCJcTC/pexels-olly-789822.jpg)",
        }}>
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-5xl md:text-8xl font-bold">Contact Now</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto md:mt-10 px-3 md:px-0"  data-aos="fade-right">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen pb-10  pt-10">
          {/* Contact Details Section */}
          <div className="bg-white lg:h-[80vh] py-6 lg:w-1/3 w-full mb-6 lg:mb-0">
            <h2 className="text-xl font-bold mb-4 text-accent">Contact Info</h2>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <span className="text-blue-500 text-2xl">📍</span>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>Surkhet, NP12</p>
                  <p>Bireendranagar 06</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <span className="text-blue-500 text-2xl">📞</span>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>+0098 9873 5647</p>
                  <p>+0096 3434 5678</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start space-x-4">
                <span className="text-blue-500 text-2xl">✉️</span>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>codinglab@gmail.com</p>
                  <p>info.codinglab@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Message Form Section */}
          <div className="bg-white lg:h-[80vh] py-6 lg:w-2/3 w-full">
            <h2 className="text-xl font-bold mb-4 text-accent">Send us a message</h2>
            <p className="text-gray-600 mb-6">
              If you have any work from me or any types of queries related to my tutorial, you can send me a message from here.
              {/* // eslint-disable-next-line react/no-unescaped-entities */}
              It's my pleasure to help you.
            </p>
            <form>
              {/* Name */}
              <div className="form-control mb-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* Email */}
              <div className="form-control mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* Message */}
              <div className="form-control mb-4">
                <textarea
                  placeholder="Enter your message"
                  className="textarea textarea-bordered w-full"
                  rows="4"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="form-control">
                <button className="btn btn-accent text-white w-full">Send Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;