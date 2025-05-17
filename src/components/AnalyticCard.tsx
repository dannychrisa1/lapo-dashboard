import { Analytics } from "../constants"

const AnalyticCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {
                Analytics.map((item) => (
                    <div key={item.id} className="bg-white border border-gray-910 rounded-xl py-4 px-2 mb-2 lg:mb-0">
                        <div className="flex flex-col">
                            <img src={item.icon} alt='icon' width="20" className="mb-3" />
                            <p className="mb-2 text-sm text-gray-light-500 font-medium">{item.title}</p>
                            <div className="flex justify-between mt-2">
                                <p className="text-sm lg:text-lg font-bold">{item.Amount}</p>
                                <div className="flex gap-2 items-center">
                                    <span className={`text-xs ${item.title === "Pending Requests" ? '' : 'bg-gray-light-600 text-green-light-100'} px-1 py-1 flex items-center gap-1`}>
                                        {item.title === "Pending Requests" ? (
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_112_6861)">
                                                    <path d="M6 4V6M6 8H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#E78020" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_112_6861">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        ) : (
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 9L9 3M9 3H5M9 3V7" stroke="#29A174" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        )}

                                        {item.percent}
                                    </span>
                                    <span className="text-xs text-gray-light-500">{item.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default AnalyticCard