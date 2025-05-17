import AnalyticCard from "../components/AnalyticCard"
import BarChart from "../components/BarChart"
import CardRequestTable from "../components/CardRequestTable"
import CardSection from "../components/CardSection"
import Header from "../components/Header"
import LineChart from "../components/LineChart"
import PieChart from "../components/PieChart"
import Sidebar from "../components/Sidebar"
import WelcomeSection from "../components/WelcomeSection"

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <div className="lg:w-[80%] relative lg:left-[20%]  py-2 bg-white">
                <Header />
                <div className="bg-blue-light-300 h-[auto] py-2">
                    <WelcomeSection />
                    <div className="bg-white h-[auto] border border-gray-light-910 rounded-xl py-4 px-2 mx-4 mt-4">
                        <p className="text-sm font-medium">Your Quick Access</p>
                        <CardSection />
                    </div>
                    <div className="mt-4 mx-4">
                        <div className="flex">
                            <p className="font-semibold text-sm mb-4">Analytics</p>
                            <hr />
                        </div>
                        <AnalyticCard />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-10 mx-4">
                        <div className="mb-4">
                          <BarChart />
                        </div>
                        <div className="mb-4">
                            <CardRequestTable />
                        </div>
                        <div className="mb-4">
                            <LineChart />
                        </div>
                        <div className="mb-4">
                            <PieChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard