import React, { useState } from 'react'
import { Home, Compass, Heart, Clock, Search } from "lucide-react";
import { Button, Modal } from "antd";
import Input from 'antd/es/input/Input';

import DashboardCategoriesDefaultPage from './categories components/DashboardCategoriesDefaultPage';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
    const [search, setSearch] = useState("Search for a site")
  return (
    <>
        <div className='bg-[#101922] w-full h-full text-white flex rounded-2xl'>

            {/* left div for navgation  */}
            <div className=' w-[20%] h-full border-r border-white/30'>

                {/* logo and site name  */}
                <div className=' h-[10%] flex justify-start items-center gap-3 pl-5'>
                    <img src="/superSite.png" alt="logo" width={40} height={40}/> <h1 className='text-xl font-bold'>Super-Site</h1>
                </div>

                {/* nav items  */}
                <div className=' h-[67%] flex justify-center items-center'>
                    <nav className=' w-[90%] h-[95%] flex justify-center'>
                        <ul className=' flex flex-col gap-3 w-full'>
                            <li className='hover:bg-[#102D4A] flex justify-start items-center gap-2 py-3 pl-3 rounded-md'><Home size={20}/>Home</li>
                            <li className='hover:bg-[#102D4A] flex justify-start items-center gap-2 py-3 pl-3 rounded-md'><Compass size={20}/>Explore</li>
                            <li className='hover:bg-[#102D4A] flex justify-start items-center gap-2 py-3 pl-3 rounded-md'><Heart size={20}/>Favorites</li>
                            <li className='hover:bg-[#102D4A] flex justify-start items-center gap-2 py-3 pl-3 rounded-md'><Clock size={20}/>Recently Visited</li>
                        </ul>
                    </nav>
                </div>

                {/* add button & profile  */}
                <div className=' h-[20%] p-3'>
                    <Button size='large' className='w-full mb-5 bg-[#137FEC]! border-[#137FEC]! text-white! font-medium! hover:bg-indigo-800!'>Add a Site</Button>
                    <div className=' mt-3 border-t border-white/30'>
                        <div className=' flex justify-center items-center gap-3 py-3'>
                            <div><img src="/superSite.png" alt="icon" width={40} className='bg-white rounded-md object-cover object-center'/></div>
                            <div>
                                <h1>Sharwan Jung Kunwar</h1>
                                <h1>sharwankunwar07@gmail.com</h1>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>




            {/* content div  */}
            <div className=' w-[80%] h-full pt-10 px-10 flex flex-col justify-between'>
                {/* top div  */}
                <div className=' h-[35%] flex flex-col gap-5 '>
                    
                    {/* top div for title add site button */}
                    <div className='flex justify-between items-end'>
                        <div>
                            <h1 className='text-5xl'>Your Central Hub For Essential Tools</h1> 
                            <p className='text-xl mt-3'>All your favorite and usefull site in one place</p>
                            </div>
                        <div><Button size='large' className='px-10! bg-[#283038]! border-[#283038]! text-white! font-medium!'>Add New Site</Button></div>
                    </div>
                    
                    {/* search bar  */}
                    <div className=''>
                        <div className='bg-[#1F2937] text-white w-full h-[50px] rounded-md flex justify-center items-center px-5 gap-3'>
                            <Search/> <Input  placeholder='search for a site' onChange={(e)=>setSearch(e.target.value)} className='bg-[#1F2937]! text-lg! text-white! placeholder:text-gray-400! font-medium h-[90%] border-none! focus:shadow-none!'/>
                        </div>
                    </div>

                    {/* key words for short */}
                    <div className='flex justify-start items-center gap-3 '>
                        <Link to="all">
                            <Button>All</Button>
                        </Link>
                        <Link to="developerTools">
                            <Button>Developer Tools</Button>
                        </Link>
                        <Link to="design">
                            <Button>Design</Button>
                        </Link>
                        <Button>AI</Button>
                        <Button>Productivity</Button>
                        <Button>News</Button>
                        <Button>Marketing</Button>
                        <Link to="entertainment">
                            <Button>Entertainment</Button>
                        </Link>
                    </div>
                </div>





                {/* buttom div  */}
                <div className=' h-[65%]'>
                    <Outlet/>
                </div>




            </div>

            <Modal footer={null} closable={false} className="" maskClosable="false">
                <div className="fixed inset-0 flex items-center justify-center bg-black/40">
                    <div className="bg-red-400 w-[98%] h-[95%] rounded-xl shadow-lg">
                        a
                    </div>
                </div>
            </Modal>





        </div>
    </>
  )
}

export default Dashboard
