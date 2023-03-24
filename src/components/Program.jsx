import React from "react";

// import icons
import PhoneIcon from "../assets/img/phone.svg";

const Program = () => {
  return (
    <div>
      <div className="text-xs flex lg:gap-x-[10px] items-baseline justify-end">
        <img
          className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]"
          src={PhoneIcon}
          alt=""
        />
        <div className="lg:text-[23px] text-blue font-extrabold">
          +62 1333778899
        </div>
      </div>
      <div className="text-xs">
        <div className="hidden lg:flex">
          Opening Hours: Mon - Sun: 9am - 5pm
        </div>
        <div className="lg:hidden text-right">Mon - Sun: 10am - 6pm</div>
      </div>
    </div>
  );
};

export default Program;
