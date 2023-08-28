import React,{ useState } from "react";
import "../resources/styles/style.css";
import "../resources/styles/responsive.css";
import SideBar from "../pages/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


const Home = () => {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [filters, setFilters] = useState({
      category: 'all',
      minPrice: 0,
      maxPrice: 100,
    });
  return (
    <>
      <div className="hero border-1 pb-3 text-dark fs-6">
        <div className="card bg-dark text-white border-0 mx-3 text-dark fs-6">
          <img
            className="card-img img-fluid"
            src="./assets/f4.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay text-dark fs-6" style={{ padding: "2rem" }} >

             <div className="container position-relative" style={{ top: "0" }}>
                  {/* New container for text content */}
                  <div className="bg-color-overlay p-3">

              {/* Sustainable Clothing Brand Section */}
              <div className="sustainable-section mt-4 text-dark fs-6 text-center">
                <span className="shimmer">
                <h5 className="card-title fs-2">Discover Sustainable Fashion</h5>
                <p className="fs-5">
                  At Eco Fashion, we are committed to providing high-quality clothing made from eco-friendly materials.
                  Shop our collection of sustainable clothing and make a positive impact on both style and the planet.
                </p>
                </span>
                  <h2 className="card-title fs-1 text fw-lighter bg-highlight text-white">New Season Arrivals</h2>
                <a href="/product" className="btn btn-outline-light btn-lg mt-3 text-dark fs-6">Shop Now</a>
              </div>
              </div>
              {/* End of Sustainable Clothing Brand Section */}

            </div>
          </div>


        </div>
      </div>









    </>
  );
};

export default Home;
