import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const App = () => {
  const [employee] = useState([
    {
      id: 1,
      name: "Sadique Shah",
      jobRole: "Frontend Developer",
      email: "saim@gmail.com",
    },
    {
      id: 2,
      name: "Abuzar Shaikh",
      jobRole: "Full Stack Developer",
      email: "abuzar@gmail.com",
    },
    {
      id: 3,
      name: "Abhi Singh",
      jobRole: "Backend Developer",
      email: "abhisingh@gmail.com",
    },
    {
      id: 4,
      name: "Krishna Sharma",
      jobRole: "Backend Developer",
      email: "krishna@gmail.com",
    },
    {
      id: 5,
      name: "Ankit Patil",
      jobRole: "Graphics Designer",
      email: "ankit@gmail.com",
    },
    {
      id: 6,
      name: "Parikshit Warade",
      jobRole: "Game Developer",
      email: "parikshit@gmail.com",
    },
    {
      id: 7,
      name: "Arman Alam",
      jobRole: "Ethical Hacker",
      email: "arman@gmail.com",
    },
    {
      id: 8,
      name: "Akash Wankhade",
      jobRole: "Java Developer",
      mail: "akash@gmail.com",
    },
    {
      id: 9,
      name: "Arshad Shaikh",
      jobRole: "Php Developer",
      email: "arshad@gmail.com",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const filterEmployees = employee.filter((emp) => {
    return emp.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  return (
    <main>
      <div className="flex gap-6 flex-col md:flex-row lg:flex-row justify-between md:justify-between lg:justify-between mx-9 my-7 items-center lg:items-center md:items-center">
        {/* Search */}
        <div className="border-[2px] border-gray-500 px-3 py-2 rounded-lg flex items-center">
          <div className="mr-3">
            <FaSearch />
          </div>
          <input
            type="text"
            className="outline-none border-none none bg-transparent"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>

        {/* User */}
        <div className="flex items-center space-x-3">
          <img
            src="/profile1.jpg"
            alt=""
            className="w-12 rounded-[50%] border-orange-400 border-[1px]"
          />
          <span>Rizwan Shaikh</span>
          <IoIosArrowDown />
        </div>
      </div>

      {/* Employee */}
      <div>
        {/* Navbar 2 */}
        <div className="flex justify-between my-6 mx-10 flex-col gap-4 sm:flex-row md:flex-row lg:flex-row">
          <h1 className="text-2xl font-semibold">Employees</h1>
          <ul className="flex space-x-4 items-center">
            <li className="bg-purple-500 px-6 py-[2px] text-white rounded-lg">
              All
            </li>
            <li>Active</li>
            <li>Inactive</li>
          </ul>
        </div>

        {/* Employees */}
        <div className="grid grid-cols-1 pb-6 pr-6 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10 ml-9">
          {filterEmployees.map((emp) => {
            return (
              <div
                className=" px-9 py-7 gap-4 flex flex-col justify-center items-center m-auto auto md:w-64 lg:w-72  rounded-md border-[3px] border-black"
                key={emp.id}
              >
                <div className="flex gap-3">
                  <img
                    src="/profile.jpg"
                    className="w-12 rounded-[50%]"
                    alt=""
                  />
                  <div>
                    <div>{emp.name}</div>
                    <div>{emp.jobRole}</div>
                  </div>
                </div>
                <div className="">
                  <span>Email:</span> {emp.email}
                </div>

                <div className=" flex items-center justify-center space-x-2">
                  <button className=" border-[2px] border-black  px-3 rounded-md">
                    Block
                  </button>
                  <button className="bg-black text-white border-[2px] border-black  px-3 rounded-md">
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default App;
