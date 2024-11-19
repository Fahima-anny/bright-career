
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

    return (
        <div className="overflow-hidden">

           <nav className="py-3" data-aos="fade-right">
           <Navbar></Navbar>
           </nav>

<main>
<Outlet></Outlet>
</main>
           
           <footer data-aos="fade-left">
            <Footer></Footer>
           </footer>

        </div>
    );
};

export default Home;