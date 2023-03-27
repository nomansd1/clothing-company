import React, { useState } from 'react'
import { BudgetRequestTab, CompanyProfileTab, EmployeesTab, DashboardTab, CartTab, OrderTab, PastOrderTab } from '../pages/customer-dashboard/index'

function Tab() {
    const data = [
        {
            id: 1,
            icon: 'dashboard',
            label: 'Dashboard'
        },
        {
            id: 2,
            icon: 'assignment',
            label: 'Order Now'
        },
        {
            id: 3,
            icon: 'shopping_cart_checkout',
            label: 'Cart'
        },
        {
            id: 4,
            icon: 'groups',
            label: 'Employees'
        },
        {
            id: 5,
            icon: 'info',
            label: 'Company Profile Detail'
        },
        {
            id: 6,
            icon: 'trending_up',
            label: 'Request for Budget'
        },
        {
            id: 7,
            icon: 'inactive_order',
            label: 'Past Orders'
        },
    ];
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div>
            <aside className="fixed top-14 left-0 z-40 whitespace-nowrap w-14 hover:w-64 h-screen transition-all duration-500 ease-in-out transform ">
                <div className="h-full pl-3 py-4 overflow-y-auto bg-[#dfdfdf]">                    
                    <ul className="space-y-2 mt-7">
                        {/* Tabs Labels*/}
                        {data.map((item, index) => (
                            <li key={index} className={activeTab === item.id ? `border-r-4 border-black` : ``}>
                                <span onClick={() => setActiveTab(item.id)} className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer`}>
                                    <span className="material-symbols-rounded w-6 h-6 text-gray-900 transition duration-75 ">
                                        {item.icon}
                                    </span>
                                    <span className="ml-3">{item.label}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
            <main className="ml-14 h-[91vh] overflow-auto p-10 mt-[56px] ">
                {activeTab === 1 && <DashboardTab/>}
                {activeTab === 2 && <OrderTab/>}
                {activeTab === 3 && <CartTab/>}
                {activeTab === 4 && <EmployeesTab/>}
                {activeTab === 5 && <CompanyProfileTab/>}
                {activeTab === 6 && <BudgetRequestTab/>}
                {activeTab === 7 && <PastOrderTab/>}
            </main>
        </div>
    )
}

export default Tab