import React from 'react'
import { Footer, Navbar } from "../components";


const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to our eco-friendly clothing ecommerce website, where style meets sustainability. At our online store, we're dedicated to providing you with a thoughtfully curated collection of fashion-forward pieces that embrace a greener and more ethical way of dressing. Our commitment to the planet is reflected in every garment we offer – from organic fabrics and low-impact dyes to fair labor practices, each item embodies our passion for a healthier world. By choosing our clothing, you're not just making a fashion statement – you're making a statement for the environment. Join us in the movement towards responsible fashion and discover a wardrobe that aligns with your values without compromising on style. Together, we're rewriting the narrative of fashion, one sustainable step at a time.
        </p>

        <h2 className="text-center py-4">Our Product Categories</h2>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid image-size" src="./assets/img_1.png" alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid image-size" src="./assets/img.png" alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Women's</h5>
              </div>
            </div>
          </div>
        </div>
        </div>
      <Footer />
    </>
  )
}

export default AboutPage