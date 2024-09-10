import React, { useState } from 'react';
import Layout from './Layout';

const Support = () => {
  const [sortOption, setSortOption] = useState('date');

  const queries = [
    {
      customerName: 'John Doe',
      state: 'California',
      region: 'West Coast',
      time: '2024-08-10 14:35',
      query: 'Order not received',
    },
    {
      customerName: 'Alice Johnson',
      state: 'Texas',
      region: 'Southwest',
      time: '2024-08-12 09:15',
      query: 'Payment issue on checkout',
    },
    {
      customerName: 'Michael Smith',
      state: 'New York',
      region: 'East Coast',
      time: '2024-08-14 16:20',
      query: 'Missing item in the order',
    },
    {
      customerName: 'Priya Patel',
      state: 'Illinois',
      region: 'Midwest',
      time: '2024-08-11 12:00',
      query: 'Incorrect billing information',
    },
  ];

  // Sorting queries based on date/time
  const sortedQueries = [...queries].sort((a, b) => {
    if (sortOption === 'date') {
      return new Date(b.time) - new Date(a.time);
    }
    return 0;
  });

  return (
    <Layout>
      <div className="p-5 bg-gray-100 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Support Queries</h1>
        
        {/* Sort Options */}
        <div className="flex justify-end mb-4">
          <label className="mr-2 text-lg">Sort By:</label>
          <select
            className="border rounded-md px-3 py-2 bg-white text-gray-700"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="date">Date</option>
            {/* Add more sorting options if needed */}
          </select>
        </div>

        {/* Display Queries */}
        <div className="space-y-4">
          {sortedQueries.map((query, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex justify-between">
                <div className="text-lg font-semibold">{query.customerName}</div>
                <div className="text-sm text-gray-500">{new Date(query.time).toLocaleString()}</div>
              </div>
              <div className="text-sm text-gray-600 mt-2">{query.state}, {query.region}</div>
              <div className="text-base mt-4">{query.query}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Support;
