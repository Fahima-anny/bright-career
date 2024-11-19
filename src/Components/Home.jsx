
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div className="overflow-hidden">

           <nav className="py-3">
           <Navbar></Navbar>
           </nav>

<main>
<Outlet></Outlet>
</main>
           
           <footer>
            <Footer></Footer>
           </footer>

        </div>
    );
};

export default Home;