import CalendarIcon from "../assets/svg/CalendarIcon"

const WelcomeSection = () => {
    return (
        <div className="px-4 flex flex-col-reverse lg:flex-row justify-between pt-4 lg:mt-12">
            <div className="leading-6">
                <p className="text-sm">Hi <span className="font-semibold text-xs">Nazeer, what would you like to do today?</span></p>
                <div className="flex gap-2">
                    <span className="font-medium text-xs">Last login:</span>
                    <span className="text-xs">26/11/2024</span>
                    <span className="text-xs">14:39:58</span>
                </div>
            </div>
            <div>
                <div className="flex gap-2 items-center mb-4 px-1 py-1 border border-gray-light-200">
                    <span className="flex items-center text-xs">
                        <CalendarIcon />
                        Today
                    </span>
                    <span className="text-xs">
                        11 Nov 2024
                    </span>
                </div>
            </div>
        </div>
    )
}

export default WelcomeSection