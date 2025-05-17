import { useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import CafriLogo from '../assets/cafrilogo.png'
import DashboardIcon from '../assets/svg/DashboardIcon';
import { SidebarLinks } from '../constants';
import { useState } from 'react';
import LogoutIcon from '../assets/svg/LogoutIcon';

const Sidebar = () => {
    const location = useLocation();
    const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setSideBarOpen((prev) => !prev);
    };

    return (
        <>
            <div className='z-50 bg-white top-[0] w-full flex items-center fixed justify-between'>
                <div className="logo mt-4 ml-2 flex relative z-10 lg:hidden">
                    <img src={Logo} alt="logo" width="150" />
                </div>
                {/* Mobile Nav Toggle */}
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden  text-white p-2 mr-5 rounded-md bg-blue-light-200"
                >
                    {sideBarOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    )}
                </button>
            </div>


            <div
                className={`fixed top-0 z-50 bg-blue-light-100 h-[100vh] w-[80%] sm:w-[60%] md:w-[40%] lg:w-[20%] px-2 py-2 overflow-y-auto scrollbar-hide
                    transition-transform duration-300 ease-in-out
                    lg:translate-x-0
                    ${sideBarOpen ? 'translate-x-0' : '-translate-x-full'}
                      [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                      `}
            >
                <div className="logo mt-4 ml-2 flex">
                    <img src={Logo} alt="logo" width="150" />
                </div>
                <a
                    href='/'
                    className={`flex text-sm items-center gap-2 mt-8 ml-2 hover:bg-white hover:text-blue-light-200 hover:cursor-pointer px-2 py-2 rounded-md ${location.pathname === '/' ? 'bg-white text-blue-light-200' : ''}`}
                >
                    <DashboardIcon
                        color="currentColor"
                        className="group-hover:text-blue-light-200"
                    />
                    <span>Dashboard</span>
                </a>
                <div className='mt-8 mb-4 ml-8'>
                    <p className='text-xs text-gray-light-100'>MAIN MENU</p>
                </div>
                <div>
                    {SidebarLinks.map((item) => (
                        <a
                            key={item.id}
                            href={item.url}
                            className={`flex text-sm items-center gap-2 mt-4 ml-2 
                                px-2 py-2 rounded-md hover:bg-white hover:text-blue-light-200 hover:cursor-pointer 
                                ${location.pathname === item.url ? "bg-white text-blue-light-200" : ""}`}
                        >
                            <div className="flex gap-2 items-center">
                                <item.icon color="currentColor" className="group-hover:text-blue-light-200" />
                                <p className="text-sm">{item.title}</p>
                            </div>
                        </a>
                    ))}
                </div>
                <div>
                    <a
                        href='/'
                        className={`flex text-sm items-center gap-2 mt-20 ml-2 hover:bg-white hover:text-red-600 hover:cursor-pointer px-2 py-2 rounded-md`}
                    >
                        <LogoutIcon
                            color="currentColor"
                            className="group-hover:text-blue-light-200"
                        />
                        <span>Logout</span>
                    </a>
                </div>
                <div className='flex flex-col ml-4 mt-6'>
                    <p className='text-xs text-gray-light-900'>POWERED BY</p>
                    <img src={CafriLogo} alt='' width="150" className='-ml-8 -mt-10' />
                </div>
            </div>
        </>
    );
};

export default Sidebar;