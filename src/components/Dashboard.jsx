import React from 'react'
import Layout from './Layout'
import { IonIcon } from '@ionic/react'
import { cashOutline, businessOutline, swapHorizontalOutline } from 'ionicons/icons'

// Sample recent deals data
const recentDeals = [
  { farmer: "John Doe", customer: "Jane Smith" },
  { farmer: "Alice Brown", customer: "Charlie Green" },
  { farmer: "Michael Johnson", customer: "Emily White" },
];

const Dashboard = () => {
  return (
    <>
      <Layout>
        <div className="flex min-h-screen">

          {/* Left Sidebar - Recent Deals */}
          <div className="w-full md:w-1/4 bg-white p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Deals</h2>
            
            <div className="space-y-4">
              {recentDeals.map((deal, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
                  <h3 className="font-semibold text-gray-800">Farmer: {deal.farmer}</h3>
                  <p className="text-gray-600">Customer: {deal.customer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Dashboard */}
          <div className="w-full md:w-3/4 p-6 bg-gray-100">
            {/* Top bar */}
            <div className="topbar flex justify-between items-center p-4 bg-white shadow-md">
              <div className="toggle">
                <IonIcon icon="menu-outline" size="large" />
              </div>
              
              <div className='flex items-center gap-3'>
                <span className="font-semibold text-gray-800">Priyanshu</span>
                <div className="user flex">
                  <img src="/image1.jpg" alt="user" className="w-10 h-10 rounded-full object-cover" />
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="mt-6">
              <h1 className="text-3xl font-semibold text-gray-700 mb-6">Dashboard</h1>

              {/* Cards for Transaction/Deal Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Transactions */}
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-700">Total Transactions</h2>
                    <p className="text-4xl font-bold text-gray-900">1,230</p>
                  </div>
                  <div className="text-6xl text-blue-600">
                    <IonIcon icon={cashOutline} />
                  </div>
                </div>

                {/* Ongoing Transactions */}
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-700">Ongoing Transactions</h2>
                    <p className="text-4xl font-bold text-gray-900">45</p>
                  </div>
                  <div className="text-6xl text-green-600">
                    <IonIcon icon={swapHorizontalOutline} />
                  </div>
                </div>

                {/* Ongoing Deals */}
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-700">Ongoing Deals</h2>
                    <p className="text-4xl font-bold text-gray-900">12</p>
                  </div>
                  <div className="text-6xl text-red-600">
                    <IonIcon icon={businessOutline} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Layout>
    </>
  )
}

export default Dashboard
