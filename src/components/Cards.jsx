import React, { useState } from "react";
import card from "../components/assets/img1.png";
import growth from "../components/assets/growth.png";

const Cards = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-20 p-4">
        <div className="card bg-base-100 w-full sm:w-64 md:w-72 lg:w-80 shadow-xl">
          <figure>
            <img
              src="https://media.geeksforgeeks.org/img-practice/prod/courses/504/Web/Content/Course_DSA_to_Dev_1720846081_1736594558.webp"
              alt="DSA to Development"
              className="w-full h-auto object-cover"
            />
          </figure>
          <div className="absolute top-3 right-3 flex items-center px-2 py-1 rounded-full gap-1" style={{ backgroundColor: "rgb(53, 54, 74)" }}>
            <span className="text-yellow-500 w-4 h-4 mr-1 mb-2 p" >⭐</span>
            <span className="text-sm font-medium text-white">4.4</span>
          </div>

          <div className="card-body">
            <h2 className="card-title text-lg font-bold">
              {" "}
               DSA to Development: A Complete Guide
            </h2>
            <p className="flex gap-2 text-sm mt-3">
              <img className="w-5 h-5" src={card} alt="Icon" />
              Beginner to Advance
            </p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <img className="w-5 h-5" src={growth} alt="Growth" />
                <p className="text-xs">488k+ interested Geeks</p>
              </div>
              <a
                href="https://nufaisahamed.github.io/portfolio2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-sm rounded text-black px-3 py-1  hover:bg-green-700 hover:text-white">
                  Explore now
                </button>
              </a>
            </div>
            <div className="card-actions justify-center mt-4">
              <button className="bg-yellow-400 text-xs w-full rounded py-2">
                <span className="font-bold">Refund of 90%</span> available on
                this course
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-full sm:w-64 md:w-72 lg:w-80 shadow-xl">
          <figure>
            <img
              src="https://media.geeksforgeeks.org/img-practice/prod/courses/227/Web/Content/backend_dev_1736591964.webp"
              alt="DSA to Development"
              className="w-full h-auto object-cover"
            />
          </figure>
          <div className="absolute top-3 right-3 flex items-center px-2 py-1 rounded-full gap-1" style={{ backgroundColor: "rgb(53, 54, 74)" }}>
            <span className="text-yellow-500 w-4 h-4 mr-1 mb-2 p" >⭐</span>
            <span className="text-sm font-medium text-white">4.7</span>
          </div>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">
              JAVA Backend Development - Live
            </h2>
            <p className="flex gap-2 text-sm mt-3">
              <img className="w-5 h-5" src={card} alt="Icon" />
              Beginner to Advance
            </p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <img className="w-5 h-5" src={growth} alt="Growth" />
                <p className="text-xs">488k+ interested Geeks</p>
              </div>
              <button className="text-sm rounded text-black px-3 py-1  hover:bg-green-700 hover:text-white">
                Explore now
              </button>
            </div>
            <div className="card-actions justify-center mt-4">
              <button className="bg-yellow-400 text-xs w-full rounded py-2">
                <span className="font-bold">Refund of 90%</span> available on
                this course
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-full sm:w-64 md:w-72 lg:w-80 shadow-xl">
          <figure>
            <img
              src="https://media.geeksforgeeks.org/img-practice/prod/courses/458/Web/Content/Course_Tech_Int_1720846791_1736594646.webp"
              alt="DSA to Development"
              className="w-full h-auto object-cover"
            />
          </figure>
          <div className="absolute top-3 right-3 flex items-center px-2 py-1 rounded-full gap-1" style={{ backgroundColor: "rgb(53, 54, 74)" }}>
            <span className="text-yellow-500 w-4 h-4 mr-1 mb-2 p" >⭐</span>
            <span className="text-sm font-medium text-white">4.9</span>
          </div>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">
              Tech Interview 101 - From DSA to System Design{" "}
            </h2>
            <p className="flex gap-2 text-sm mt-3">
              <img className="w-5 h-5" src={card} alt="Icon" />
              Beginner to Advance
            </p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <img className="w-5 h-5" src={growth} alt="Growth" />
                <p className="text-xs">488k+ interested Geeks</p>
              </div>
              <button className="text-sm rounded text-black px-3 py-1  hover:bg-green-700 hover:text-white">
                Explore now
              </button>
            </div>
            <div className="card-actions justify-center mt-4">
              <button className="bg-yellow-400 text-xs w-full rounded py-2">
                <span className="font-bold">Refund of 90%</span> available on
                this course
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-full sm:w-64 md:w-72 lg:w-80 shadow-xl">
          <figure>
            <img
              src="https://media.geeksforgeeks.org/img-practice/prod/courses/241/Web/Content/FSRNL_1705410152_1736594810.webp"
              alt="DSA to Development"
              className="w-full h-auto object-cover"
            />
          </figure>
          <div className="absolute top-3 right-3 flex items-center px-2 py-1 rounded-full gap-1" style={{ backgroundColor: "rgb(53, 54, 74)" }}>
            <span className="text-yellow-500 w-4 h-4 mr-1 mb-2 p" >⭐</span>
            <span className="text-sm font-medium text-white">4.7</span>
          </div>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">
              Full Stack Development with React & Node JS - Live{" "}
            </h2>
            <p className="flex gap-2 text-sm mt-3">
              <img className="w-5 h-5" src={card} alt="Icon" />
              Beginner to Advance
            </p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <img className="w-5 h-5" src={growth} alt="Growth" />
                <p className="text-xs">488k+ interested Geeks</p>
              </div>
              <button className="text-sm rounded text-black px-3 py-1  hover:bg-green-700 hover:text-white">
                Explore now
              </button>
            </div>
            <div className="card-actions justify-center mt-4">
              <button className="bg-yellow-400 text-xs w-full rounded py-2">
                <span className="font-bold">Refund of 90%</span> available on
                this course
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-full sm:w-64 md:w-72 lg:w-80 shadow-xl">
          <figure>
            <img
              src="https://media.geeksforgeeks.org/img-practice/prod/courses/270/Web/Content/javaprogramming_1736593466.webp"
              alt="DSA to Development"
              className="w-full h-auto object-cover"
            />
          </figure>
          <div className="absolute top-3 right-3 flex items-center px-2 py-1 rounded-full gap-1" style={{ backgroundColor: "rgb(53, 54, 74)" }}>
            <span className="text-yellow-500 w-4 h-4 mr-1 mb-2 p" >⭐</span>
            <span className="text-sm font-medium text-white">4.6</span>
          </div>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">
              Java Programming Online Course [Complete Beginner{" "}
            </h2>
            <p className="flex gap-2 text-sm mt-3">
              <img className="w-5 h-5" src={card} alt="Icon" />
              Beginner to Advance
            </p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <img className="w-5 h-5" src={growth} alt="Growth" />
                <p className="text-xs">488k+ interested Geeks</p>
              </div>
              <button className="text-sm rounded text-black px-3 py-1  hover:bg-green-700 hover:text-white">
                Explore now
              </button>
            </div>
            <div className="card-actions justify-center mt-4">
              <button className="bg-yellow-400 text-xs w-full rounded py-2">
                <span className="font-bold">Refund of 90%</span> available on
                this course
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-full sm:w-64 md:w-72 lg:w-80 shadow-xl">
          <figure>
            <img
              src="https://media.geeksforgeeks.org/img-practice/prod/courses/221/Web/Content/cpp_1736593581.webp"
              alt="DSA to Development"
              className="w-full h-auto object-cover"
            />
          </figure>
          <div className="absolute top-3 right-3 flex items-center px-2 py-1 rounded-full gap-1" style={{ backgroundColor: "rgb(53, 54, 74)" }}>
            <span className="text-yellow-500 w-4 h-4 mr-1 mb-2 p" >⭐</span>
            <span className="text-sm font-medium text-white">4.7</span>
          </div>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">
              C++ Programming Course Online - Complete Beginner
            </h2>
            <p className="flex gap-2 text-sm mt-3">
              <img className="w-5 h-5" src={card} alt="Icon" />
              Beginner to Advance
            </p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <img className="w-5 h-5" src={growth} alt="Growth" />
                <p className="text-xs">488k+ interested Geeks</p>
              </div>
              <button className="text-sm rounded text-black px-3 py-1  hover:bg-green-700 hover:text-white">
                Explore now
              </button>
            </div>
            <div className="card-actions justify-center mt-4">
              <button className="bg-yellow-400 text-xs w-full rounded py-2">
                <span className="font-bold">Refund of 90%</span> available on
                this course
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
