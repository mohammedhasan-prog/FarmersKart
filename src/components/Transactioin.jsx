import React, { useState } from 'react';
import Layout from './Layout';

const Transaction = () => {
  // Sample transactions with IDs
  const [transactions, setTransactions] = useState([
    { id: 1, farmer: 'John Doe', customer: 'Jane Smith', amount: 1500, status: 'Success' },
    { id: 2, farmer: 'Mark Wilson', customer: 'Paul Johnson', amount: 1000, status: 'Failed' },
    { id: 3, farmer: 'Anna Brown', customer: 'Sara Davis', amount: 1200, status: 'Pending' },
    { id: 4, farmer: 'Chris Green', customer: 'Michael Lee', amount: 1800, status: 'Success' },
    { id: 5, farmer: 'Alice White', customer: 'John Moore', amount: 950, status: 'Failed' }
  ]);

  const [sortOrder, setSortOrder] = useState('asc');

  const successfulTransactions = transactions.filter(t => t.status === 'Success').length;
  const failedTransactions = transactions.filter(t => t.status === 'Failed').length;
  const pendingTransactions = transactions.filter(t => t.status === 'Pending').length;

  // Sorting function
  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.status.localeCompare(b.status);
    } else {
      return b.status.localeCompare(a.status);
    }
  });

  return (
    <Layout>
      {/* Top Cards Section */}
      <div className="flex justify-between gap-6 my-8">
        <div className="bg-green-100 text-green-800 p-6 rounded-lg w-full">
          <h2 className="text-2xl font-bold">Successful Transactions</h2>
          <p className="text-xl">{successfulTransactions}</p>
        </div>
        <div className="bg-red-100 text-red-800 p-6 rounded-lg w-full">
          <h2 className="text-2xl font-bold">Failed Transactions</h2>
          <p className="text-xl">{failedTransactions}</p>
        </div>
        <div className="bg-yellow-100 text-yellow-800 p-6 rounded-lg w-full">
          <h2 className="text-2xl font-bold">Pending Transactions</h2>
          <p className="text-xl">{pendingTransactions}</p>
        </div>
      </div>

      {/* Sorting Button */}
      <div className="my-4">
        <button
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Sort by Status ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
        </button>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left font-bold">Transaction ID</th>
              <th className="p-4 text-left font-bold">Farmer Name</th>
              <th className="p-4 text-left font-bold">Customer Name</th>
              <th className="p-4 text-left font-bold">Amount</th>
              <th className="p-4 text-left font-bold">Status</th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map(transaction => (
              <tr key={transaction.id} className="border-b">
                <td className="p-4">{transaction.id}</td>
                <td className="p-4">{transaction.farmer}</td>
                <td className="p-4">{transaction.customer}</td>
                <td className="p-4">{transaction.amount}</td>
                <td className={`p-4 ${transaction.status === 'Success' ? 'text-green-600' : transaction.status === 'Failed' ? 'text-red-600' : 'text-yellow-600'}`}>
                  {transaction.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Transaction;
