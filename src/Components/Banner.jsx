

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">

  <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/FzkWBZX/pexels-olly-3756681.jpg)",
  }}>
  <div className="hero-overlay bg-black bg-opacity-60"></div>
  <div className="hero-content text-center text-white">
    <div className="max-w-4xl">
      <h1 className="mb-5 text-5xl font-bold">Your Career Journey Starts Here</h1>
      <p className="mb-5 p-9">
      Discover the perfect career path tailored to your unique skills and passions. Our expert guidance ensures you achieve your professional goals with confidence and clarity.
      </p>
      <button className="btn btn-accent text-white">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute left-1 md:left-5 right-1 md:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
   
  <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/k5yyZvv/pexels-fauxels-3183127.jpg)",
  }}>
  <div className="hero-overlay bg-black bg-opacity-60"></div>
  <div className="hero-content text-center text-white">
    <div className="max-w-4xl">
      <h1 className="mb-5 text-5xl font-bold">Unlock Your True Potential</h1>
      <p className="mb-5 p-9">
      Start your journey to success with our comprehensive career counseling. We provide personalized advice, industry insights, and tools to help you navigate your future with ease.
      </p>
      <button className="btn btn-accent text-white">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute left-1 md:left-5 right-1 md:right-5  top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">

  <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/54wp97Y/pexels-marily-torres-227778-776615.jpg)",
  }}>
  <div className="hero-overlay bg-black bg-opacity-60"></div>
  <div className="hero-content text-center text-white">
    <div className="max-w-4xl">
      <h1 className="mb-5 text-5xl font-bold">Find the Right Path, Today</h1>
      <p className="mb-5 p-9">
      Explore limitless opportunities and make informed career decisions. Our expert counselors are here to empower your aspirations and turn your ambitions into achievable realities.
      </p>
      <button className="btn btn-accent text-white">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute left-1 md:left-5 right-1 md:right-5  top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>

</div>
        </div>
    );
};

export default Banner;