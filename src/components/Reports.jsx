import React, { useState } from 'react';
import Layout from './Layout';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('day'); // default period

  // Dummy data for graph
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: selectedPeriod === 'day' ? [12, 19, 3, 5, 2, 3] : selectedPeriod === 'month' ? [200, 400, 300, 700, 500, 600] : [2000, 3000, 4000, 5000, 6000, 7000],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Profit',
        data: selectedPeriod === 'day' ? [2, 3, 20, 5, 1, 4] : selectedPeriod === 'month' ? [100, 150, 250, 400, 350, 450] : [1000, 1200, 1300, 1400, 1600, 1700],
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
      },
      {
        label: 'Sales',
        data: selectedPeriod === 'day' ? [1, 5, 10, 8, 7, 15] : selectedPeriod === 'month' ? [80, 120, 200, 150, 180, 220] : [900, 1200, 1500, 1800, 2000, 2200],
        borderColor: 'rgba(255, 159, 64, 1)',
        fill: false,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Analytics',
      },
    },
  };

  // Calculate totals based on selected period
  const totalRevenue = selectedPeriod === 'day' ? '12,000' : selectedPeriod === 'month' ? '80,000' : '1,200,000';
  const totalProfit = selectedPeriod === 'day' ? '4,000' : selectedPeriod === 'month' ? '50,000' : '600,000';
  const totalSales = selectedPeriod === 'day' ? '300' : selectedPeriod === 'month' ? '1,200' : '18,000';

  return (
    <Layout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Sales Analytical Reports</h2>

        {/* Period Selection */}
        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${selectedPeriod === 'day' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedPeriod('day')}
          >
            Day
          </button>
          <button
            className={`px-4 py-2 rounded ${selectedPeriod === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedPeriod('month')}
          >
            Month
          </button>
          <button
            className={`px-4 py-2 rounded ${selectedPeriod === 'year' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedPeriod('year')}
          >
            Year
          </button>
        </div>

        {/* Chart Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <Line data={data} options={options} />
        </div>

        {/* Stylish Summary Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Total Revenue</h3>
            <p className="text-2xl font-semibold">${totalRevenue}</p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Total Profit</h3>
            <p className="text-2xl font-semibold">${totalProfit}</p>
          </div>
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Total Sales</h3>
            <p className="text-2xl font-semibold">{totalSales}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
