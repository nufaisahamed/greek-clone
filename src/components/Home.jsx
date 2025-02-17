import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-green-50">
        <div className="  flex justify-center  mt-[200px] items-center">
          <h1 className=" text-[40px] font-semibold ">
            Hello, What Do You Want To Learn?
          </h1>
        </div>
        <br />
        <br />
        <div className=" flex justify-center ">
          <input
            className=" w-[800px] h-[60px] p-6 border border-gray-400  rounded-2xl"
            type="text"
            placeholder="Data science"
          />
        </div>
        <br />
        <br />
        <div className="flex justify-center gap-5">
          <button className="border border-gray-300 rounded-[7px] p-2  text-[14px] ">
            Master DS & ML
          </button>
          <button className="border border-gray-300 rounded-[7px] p-2  text-[14px] bg-blue-500 text-white">
            Courses @90% Refund
          </button>
          <button className="border border-gray-300 rounded-[7px] p-2  text-[14px]">
            Full Stack Live Classes
          </button>
        </div>{" "}
        <br />
        <br />
        <div className="flex justify-between items-center px-4 sm:px-6  lg:px-44 py-4">
          <p className="text-[24px] font-bold">Courses</p>
          <button className="border border-gray-300 rounded-box text-[14px] px-4 py-2 " >
            View All
          </button>
          
        </div>
      </div>
    </>
  );
};

export default Home;
