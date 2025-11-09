import React, { useState } from "react";
import { Home, Compass, Heart, Clock, Search } from "lucide-react";
import { Button, Modal } from "antd";
import Input from "antd/es/input/Input";
import { Link, Outlet, useLocation } from "react-router-dom";

function Dashboard() {
  const [search, setSearch] = useState("");
  const location = useLocation();

  // Top keyword links
  const topLinks = [
    { name: "All", path: "/all" },
    { name: "Development Tools", path: "/developmentTools" },
    { name: "Design & Inspiration", path: "/designInspiration" },
    { name: "AI", path: "/ai" },
    { name: "Productivity Boosters", path: "/productivity" },
    { name: "Entertainment", path: "/entertainment" },
  ];

  // Left nav links
  const sideLinks = [
    { name: "Home", icon: <Home size={20} />, path: "/" },
    { name: "Explore", icon: <Compass size={20} />, path: "explore" },
    { name: "Favorites", icon: <Heart size={20} />, path: "favorites" },
    { name: "Recently Visited", icon: <Clock size={20} />, path: "recent" },
  ];

  return (
    <>
    
      <div className="bg-[#101922] w-full h-full text-white flex rounded-2xl">
        {/* Left div for navigation */}
        <div className="w-[20%] h-full border-r border-white/30">
          {/* Logo */}
          <div className="h-[10%] flex justify-start items-center gap-3 pl-5">
            <img src="/superSite.png" alt="logo" width={40} height={40} />
            <h1 className="text-xl font-bold">Super-Site</h1>
          </div>

          {/* Nav items */}
          <div className="h-[67%] flex justify-center items-center">
            <nav className="w-[90%] h-[95%] flex justify-center">
              <ul className="flex flex-col gap-3 w-full">
                {sideLinks.map((link) => (
                  <Link to={link.path}>
                    <li
                        key={link.name}
                        className={`flex justify-start items-center gap-2 py-3 pl-3 rounded-md hover:bg-[#102D4A] ${
                        location.pathname === link.path
                            ? "bg-indigo-400 text-white"
                            : ""
                        }`}
                    >
                        {link.icon}
                        {link.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>

          {/* Add button & profile */}
          <div className="h-[20%] p-3">
            <Button
              size="large"
              className="w-full mb-5 bg-[#137FEC]! border-[#137FEC]! text-white! font-medium! hover:bg-indigo-800!"
            >
              Add a Site
            </Button>
            <div className="mt-3 border-t border-white/30">
              <div className="flex justify-center items-center gap-3 py-3">
                <div>
                  <img
                    src="/superSite.png"
                    alt="icon"
                    width={40}
                    className="bg-white rounded-md object-cover object-center"
                  />
                </div>
                <div>
                  <h1>Sharwan Jung Kunwar</h1>
                  <h1>sharwankunwar07@gmail.com</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content div */}
        <div className="w-[80%] pt-10 px-10 flex flex-col  justify-between">
          {/* Top div */}
          <div className=" flex flex-col gap-5">
            {/* Title and Add button */}
            <div className="flex justify-between items-end ">
              <div>
                <h1 className="text-5xl">Your Central Hub For Essential Tools</h1>
                <p className="text-xl mt-3">
                  All your favorite and useful sites in one place
                </p>
              </div>
              <div>
                <Button
                  size="large"
                  className="px-10! bg-[#283038]! border-[#283038]! text-white! font-medium!"
                >
                  Add New Site
                </Button>
              </div>
            </div>

            {/* Search bar */}
            <div>
              <div className="bg-[#1F2937] text-white w-full h-[50px] rounded-md flex justify-center items-center px-5 gap-3">
                <Search />
                <Input
                  placeholder="Search for a site"
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-[#1F2937]! text-lg! text-white! placeholder:text-gray-400! font-medium h-[90%] border-none! focus:shadow-none!"
                />
              </div>
            </div>

            {/* Top keyword buttons */}
            <div className="flex justify-start items-center gap-2.5">
              {topLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <Button
                    className={`${
                      location.pathname === link.path
                        ? "bg-indigo-400! text-white! border-white/10! font-medium!"
                        : "bg-gray-200! text-black! font-medium!"
                    }`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
              {/* Buttons without routing */}
              <Button className="bg-gray-200 text-black">Documentation & Research</Button>
              <Button className="bg-gray-200 text-black">Learning Resources</Button>
            </div>
          </div>

          {/* Bottom content */}
          <div className="h-[60vh]">
            <Outlet />
          </div>
        </div>

        {/* Modal */}
        <Modal footer={null} closable={false} className="" maskClosable="false">
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="bg-red-400 w-[98%] h-[95%] rounded-xl shadow-lg">a</div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Dashboard;
