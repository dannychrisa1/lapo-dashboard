import { CardRequests } from "../constants";

const CardRequestTable = () => {
    return (
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-light-300">
            <h2 className="text-base font-semibold text-black-light-100 mb-4">Recent Card Requests</h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-xs bg-blue-light-100 text-gray-light-100 border-b border-gray-light-300">
                            <th className="px-4 py-3 text-left font-medium">Branch</th>
                            <th className="px-4 py-3 text-left font-medium">Card Type</th>
                            <th className="px-4 py-3 text-center font-medium">Quantity</th>
                            <th className="px-4 py-3 text-center font-medium">Status</th>
                            <th className="px-4 py-3 text-right font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-light-300">
                        {CardRequests.map((item) => (
                            <tr key={item.id} className="text-xs hover:bg-blue-light-100/50 transition-colors">
                                <td className="px-4 py-3 text-gray-800">{item.branch}</td>
                                <td className="px-4 py-3 text-gray-700">{item.cardType}</td>
                                <td className="px-4 py-3 text-center text-gray-700">{item.quantity}</td>
                                <td className="px-4 py-3 text-center">
                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${item.status === 'Ready' ? 'bg-green-light-300 text-green-light-200' :
                                        item.status === 'In Progress' ? 'bg-yellow-light-200 text-yellow-light-100' :
                                        item.status === 'Acknowledged' ? 'bg-blue-light-600 text-blue-light-500' :
                                        'bg-gray-light-700 text-gray-light-800'
                                    }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <button className="text-blue-light-200 hover:text-blue-light-600 hover:underline font-medium">
                                        {item.action}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CardRequestTable;