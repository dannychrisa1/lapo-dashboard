import BellIcon from "../assets/svg/BellIcon"
import DashboardIcon from "../assets/svg/DashboardIcon"
import SearchIcon from "../assets/svg/SearchIcon"
import UserIcon from "../assets/svg/UserIcon"

const Header = () => {
    return (
        <div className="lg:fixed top-0 w-[80%] bg-white flex lg:flex items-center mt-16 lg:mt-0 justify-between px-4 py-1">
            <div>
                <a href="/" className="lg:flex items-center gap-2 hidden">
                    <DashboardIcon color="currentColor" />
                    <span>Dashboard</span>
                </a>
            </div>
            <div className="flex gap-1 items-center">
                <div className="relative">
                    <input type="text" placeholder="Search"
                        className="px-8 lg:w-[200px] border border-gray-light-200 outline-none rounded-xl"
                    />
                    <span className="absolute top-1 left-2"><SearchIcon /></span>
                </div>
                <span className="px-[1px] py-[1px] rounded-full hover:bg-gray-light-300 hover:cursor-pointer">
                    <BellIcon />
                </span>
                <span className="px-[8px] py-[8px] rounded-full hover:bg-gray-light-300 hover:cursor-pointer">
                    <UserIcon />
                </span>
            </div>
        </div>
    )
}

export default Header