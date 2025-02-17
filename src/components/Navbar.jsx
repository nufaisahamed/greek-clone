import React from "react";
import { FaSearch, FaMoon, FaBell, FaCode } from "react-icons/fa";



function Navbar() {
 
  
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="  navbar  border border-gray-300">
          <div className="navbar-start order-2  flex justify-center ">
            <div className="dropdown">
              <div
                tabindex="0"
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Courses</a>
                  <ul class="p-5">
                    <li>
                      <a>DSA To Development</a>
                    </li>
                    <li>
                      <a>GATE Courses</a>
                    </li>
                    <li>
                      <a>Get IBM Certification</a>
                    </li>
                    <li>
                      <a>Newly Launched!</a>
                    </li>
                    <li>
                      <a>For Working Profession</a>
                    </li>
                    <li>
                      <a>For Students</a>
                    </li>
                    <li>
                      <a>Full Stack Development</a>
                    </li>
                    <li>
                      <a>Data Science Program</a>
                    </li>
                    <li>
                      <a>All courses</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Tutorials</a>
                  <ul class="p-5">
                    <li>
                      <a>Data Structure & Algorithm</a>
                    </li>
                    <li>
                      <a>ML & Data Science</a>
                    </li>
                    <li>
                      <a>Interview Corner</a>
                    </li>
                    <li>
                      <a>Launguages</a>
                    </li>
                    <li>
                      <a>Web Development</a>
                    </li>
                    <li>
                      <a>GATE</a>
                    </li>
                    <li>
                      <a>CS Subject</a>
                    </li>
                    <li>
                      <a>DevOps And Linux</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Jobs</a>
                  <ul class="p-5">
                    <li>
                      <a>Get Hired:Apply For Jobs</a>
                    </li>
                    <li>
                      <a>Corparte Hirng Solution</a>
                    </li>
                    <li>
                      <a>Employer Branding</a>
                    </li>
                    <li>
                      <a>All Jobs Updates</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Practice</a>
                  <ul class="p-5">
                    <li>
                      <a>Problems of the Day</a>
                    </li>
                    <li>
                      <a>Practice Coding Problems</a>
                    </li>
                    <li>
                      <a>GfG SDE Sheet</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Contests</a>
                  <ul class="p-5">
                    <li>
                      <a> GfG Weekly</a>
                    </li>
                    <li>
                      <a>Job-A-Thon Hiring Challenge</a>
                    </li>
                    <li>
                      <a>All Contest And Events</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">
              <img
                src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
                alt=""
              />
            </a>
          </div>
          {/* -------------------------------------------------------------------------------------- */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1  ">
              <li>
                <details>
                  <summary className=" font-bold">Courses</summary>
                  <ul className="p-2 " style={{ width: "200px" }}>
                    <li>
                      <a>DSA To Development</a>
                    </li>
                    <li>
                      <a>GATE Courses</a>
                    </li>
                    <li>
                      <a>Get IBM Certification</a>
                    </li>
                    <li>
                      <a>Newly Launched!</a>
                    </li>
                    <li>
                      <a>For Working Professionals</a>
                    </li>
                    <li>
                      <a>For Students</a>
                    </li>
                    <li>
                      <a>Full Stack Development</a>
                    </li>
                    <li>
                      <a>Data Science Program</a>
                    </li>
                    <li>
                      <a>All courses</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">
              <li>
                <details>
                  <summary className=" font-bold">Tutorials</summary>
                  <ul className="p-2 " style={{ width: "200px" }}>
                    <li>
                      <a>Data Structure & Algorithm</a>
                    </li>
                    <li>
                      <a>ML & Data Science</a>
                    </li>
                    <li>
                      <a>Interview Corner</a>
                    </li>
                    <li>
                      <a>Launguages</a>
                    </li>
                    <li>
                      <a>Web Development</a>
                    </li>
                    <li>
                      <a>GATE</a>
                    </li>
                    <li>
                      <a>CS Subject</a>
                    </li>
                    <li>
                      <a>DevOps And Linux</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1  ">
              <li>
                <details>
                  <summary className=" font-bold">Jobs</summary>
                  <ul className=" p-2" style={{ width: "200px" }}>
                    <li>
                      <a>Get Hired:Apply For Jobs</a>
                    </li>
                    <li>
                      <a>Corparte Hirng Solution</a>
                    </li>
                    <li>
                      <a>Employer Branding</a>
                    </li>
                    <li>
                      <a>All Jobs Updates</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 ">
              <li>
                <details>
                  <summary className=" font-bold">Practice</summary>
                  <ul className=" p-2" style={{ width: "200px" }}>
                    <li>
                      <a>Problems of the Day</a>
                    </li>
                    <li>
                      <a>Practice Coding Problems</a>
                    </li>
                    <li>
                      <a>GfG SDE Sheet</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary className=" font-bold">Contests</summary>
                  <ul className=" p-2" style={{ width: "200px" }}>
                    <li>
                      <a> GfG Weekly</a>
                    </li>
                    <li>
                      <a>Job-A-Thon Hiring Challenge</a>
                    </li>
                    <li>
                      <a>All Contest And Events</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          <div className="navbar-end order-3">
            <div className="flex items-center justify-end space-x-4 w-full mr-3">
              <a href="#" className="text-xl text-gray-600 hover:text-gray-900">
                <FaSearch />
              </a>
              <a href="#" className="text-xl text-gray-600 hover:text-gray-900">
                <FaMoon />
              </a>
              <a href="#" className="text-xl text-gray-600 hover:text-gray-900">
                <FaBell />
              </a>
              <a href="#" className="text-xl text-gray-600 hover:text-gray-900">
                <FaCode />
              </a>
            </div>
            <a className="btn bg-green-950 text-white ">Sign In</a>
          </div>
        </div>

        {/* ----------------------------------------------------------------------------------------------------------- */}
        <div
          className=" max-w-fit text-sm overflow-x-auto whitespace-nowrap scrollbar-hide  "
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <ul className="flex gap-8 p-2 ">
            <a href="" className=" hover:text-green-600 ">
              <li>Trending Now</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>DSA</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>Web Tech</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>Foundation Courses</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>Data Science</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>Practice Problem</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>Python</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>Machine Learning</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>JavaScript</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>System Design</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>Django</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>DevOps Tutorial</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>Java</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>C</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>C++</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>ReactJS</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>NodeJS</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>CP Live</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>Aptitude</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>Puzzles</li>
            </a>
            <a href="" className=" hover:text-green-600">
              <li>Project</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
