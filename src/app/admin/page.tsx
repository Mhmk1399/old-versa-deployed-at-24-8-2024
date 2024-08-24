"use client"
import { useState, useEffect } from 'react';
import FileUploadForm from '../../../components/(admin)/FileUploadForm';
// import OrdersTable from '@/components/(forms)/orders/OrdersTable'; // Import a new Orders component

const AdminPage = () => {
  const [activeForm, setActiveForm] = useState('files');
 

  // Fetch the existing data for each component
  

  const renderActiveForm = () => {
    switch (activeForm) {
      case 'files':
        return <FileUploadForm />;
      
      default:
        return <FileUploadForm />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <nav className="w-full lg:w-64 bg-gray-800 text-white p-4">
        <ul className="space-y-4">
          <li>
            <button onClick={() => setActiveForm('files')} className={`block w-full text-left ${activeForm === 'files' && 'bg-gray-700'}`}>
              images
            </button>
          </li>
          
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-y-auto">
        {renderActiveForm()}
      </main>
    </div>
  );
};

// Component to render tables


export default AdminPage;
