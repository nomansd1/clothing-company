import React, { useState } from 'react'
import { BudgetRequestTab, CompanyProfileTab, EmployeesTab, OrderTab, UserProfileTab } from '../pages/index'

function Tab() {
    const data = [
        {
            id: 1,
            icon: 'assignment',
            label: 'Orders'
        },
        {
            id: 2,
            icon: 'person',
            label: 'My Profile'
        },
        {
            id: 3,
            icon: 'groups',
            label: 'Employees'
        },
        {
            id: 4,
            icon: 'info',
            label: 'Company Profile Detail'
        },
        {
            id: 5,
            icon: 'trending_up',
            label: 'Request for Budget'
        }
    ];
    const [activeTab, setActiveTab] = useState(2);

    return (
        <div>
            <aside className="fixed top-14 left-0 z-40 whitespace-nowrap w-14 hover:w-64 h-screen transition-all duration-500 ease-in-out transform -translate-x-full sm:translate-x-0">
                <div className="h-full pl-3 py-4 overflow-y-auto bg-[#dfdfdf]">
                    <div className='flex items-center p-2 mb-1 ml-0.5'>
                        <span className="material-symbols-rounded w-6 h-6 text-gray-900 transition duration-75 ">
                            dashboard
                        </span>
                        <h1 className='text-lg font-bold ml-3.5'>Dashboard</h1>
                    </div>
                    <ul className="space-y-2">
                        {/* Tabs Labels*/}
                        {data.map((item, index) => (
                            <li key={index} className={activeTab === item.id ? `border-r-4 border-black` : ``}>
                                <a href="#" onClick={() => setActiveTab(item.id)} className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100`}>
                                    <span className="material-symbols-rounded w-6 h-6 text-gray-900 transition duration-75 ">
                                        {item.icon}
                                    </span>
                                    <span className="ml-3">{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
            <main className="ml-16 bg-red-600 h-[90vh] overflow-auto">
                {activeTab === 1 && <OrderTab/>}
                {activeTab === 2 && <UserProfileTab/>}
                {activeTab === 3 && <EmployeesTab/>}
                {activeTab === 4 && <CompanyProfileTab/>}
                {activeTab === 5 && <BudgetRequestTab/>}
            </main>
        </div>
    )
}

export default Tab