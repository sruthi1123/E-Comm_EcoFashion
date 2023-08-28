import React from "react";
import "../resources/styles/style.css";
import "../resources/styles/responsive.css";


const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center" style={{
                                              background: "linear-gradient(to bottom, #2E3D31, #1E2921)",
                                                  color: "#fff",
                                                  paddingTop: "30px"}}>
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
           <p className="mb-3 mb-md-0" style={{ color: "#000", fontSize: "14px" }}>
             Made with ❤️ by {" "}
             <a href="http://localhost:3000/" className="text-decoration-underline text-dark fs-6" target="_blank" rel="noreferrer">
               Sruthi Kasireddy
             </a>
           </p>
            </div>
        </div>

       <div class="container">


                              <div className="d-flex align-items-center justify-content-center pb-5">
                                 {/*  <div className="col-md-4">
                                    <h4>Our Products</h4>
                                    <ul className="list-unstyled">
                                      <li><a href="#">Men's Clothing</a></li>
                                      <li><a href="#">Women's Clothing</a></li>
                                      <li><a href="#">Travel Accessories</a></li>
                                      <li><a href="#">Footwear</a></li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4">
                                    <h4>Subscribe to Our Newsletter</h4>
                                    <p>Stay updated with our latest products and offers.</p>
                                    <form className="subscribe-form">
                                      <input type="email" placeholder="Enter your email" />
                                      <button type="submit">Subscribe</button>
                                    </form>
                                  </div> */}


                             <div class="col-md-4 text-center">
                                   <h4>Follow Us</h4>
                                       <ul className="list-unstyled social-icons">
                                           <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        </ul>

                               </div>

                               </div>


           <div class="row mt-3">
             <div class="col-md-12 text-center">
               <p>&copy; 2023 Eco Fashion. All rights reserved.</p>
              </div>
           </div>

         </div>



      </footer>



    </>
  );
};

export default Footer;
