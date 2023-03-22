import React, { useState } from 'react'
import { DashboardTab, OrderTab, ProductTab } from '../pages/admin-dashboard/index'

function AdminTab() {
    const data = [
        {
            id: 1,
            icon: 'dashboard',
            label: 'Dashboard'
        },
        {
            id: 2,
            icon: 'assignment',
            label: 'Orders'
        },
        {
            id: 3,
            icon: 'production_quantity_limits',
            label: 'Products'
        }
    ];
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div>
            <aside className="fixed top-14 left-0 z-40 whitespace-nowrap w-14 hover:w-64 h-screen transition-all duration-500 ease-in-out transform -translate-x-full sm:translate-x-0">
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
            <main className="ml-14 h-[91vh] overflow-auto p-10">
                {activeTab === 1 && <DashboardTab />}
                {activeTab === 2 && <OrderTab />}
                {activeTab === 3 && <ProductTab />}
            </main>
        </div>
    )
}

export default AdminTab
