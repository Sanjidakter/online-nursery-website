
import Footer from "@/Shared/Footer/Footer";
import Navbar from "@/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { Outlet} from "react-router-dom";


const Main = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet></Outlet>

      <Footer></Footer>
      <Toaster/>
    </div>
  );
};

export default Main;
