import React from "react";

// import image
import DogImg from "../assets/img/dogs/dog-contact.png";

const Contact = () => {
  return (
    <section className="bg-yellow-secondary p-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around">
          {/* image */}
          <div className="p-4 order-1 lg:-order-1 lg:py-14 md:p-6 flex justify-center bg-yellow-secondary">
            <img
              src={DogImg}
              alt=""
              className=" w-25 h-25"
            />
          </div>
          {/* text */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-orange text-4xl font-semibold mb-3">Contact</div>
            <div className="text-4xl text-blue font-extrabold">
              +62 1333778899
            </div>
            <div className="mb-7 text-blue">
              Opening Hours: Mon - Sun: 9am - 5pm
            </div>
            <button className="btn">Make an appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
