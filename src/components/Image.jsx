import React from "react";

const Image = () => {
  return (
    <div>
      <div className="flex items-center justify-center  h-60 mt-20">
        <img
          src="https://media.geeksforgeeks.org/auth-dashboard-uploads/gate_promo_image.jpg"
          alt="Hover Me"
          className="transition-transform duration-300 transform hover:scale-110 scale-100 shadow-lg rounded-lg  "
        />
      </div>
    </div>
  );
};

export default Image;
