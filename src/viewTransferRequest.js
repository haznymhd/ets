import React, { useState } from 'react';
import './employeeForm.css';

const ViewTransfer = () => {
  const [activeTab, setActiveTab] = useState('view');


 
  const renderForm = () => {
    return (
      <>
      <p className='heading3'>Received Transfer Request</p>
       <table className="employee-table">
        <tr>
            <th>Employee No: </th>
            <th>Description: </th>
            <th>Request Date: </th>
            <th>Title: </th>
            <th>Transfer Type: </th>
            <th>Transfer Route Position: </th>
            <th>Status: </th>
            <th>Transfer Cycle ID: </th>
            <th>Manager ID: </th>
            <th>Manager Description: </th>
            <th>Previous Decision</th>
            <th colSpan={2}>HR Decision: </th>
            
        </tr>
        <tr>
            <td>12521 </td>
            <td>Personal request </td>
            <td>2021.10.09 </td>
            <td>Loan Clark  </td>
            <td>Routine </td>
            <td>Junior Clark </td>
            <td>On Process </td>
            <td>2525</td>
            <td>89567 </td>
            <td>General Manager </td>
            <td>Proceeding</td>
            <td><a href='#'>Add to transfer Schedule</a> </td>
            <td><a href='#'>Add to transfer Schedule</a> </td>
        </tr>
        <tr>
            <td>12521 </td>
            <td>Personal request </td>
            <td>2021.10.09 </td>
            <td>Loan Clark  </td>
            <td>Routine </td>
            <td>Junior Clark </td>
            <td>On Process </td>
            <td>2525</td>
            <td>89567 </td>
            <td>General Manager </td>
            <td>Proceeding</td>
            <td><a href='#'>Add to transfer Schedule</a> </td>
            <td><a href='#'>Add to transfer Schedule</a> </td>
        </tr>

       </table>
       
       
      </>
    );
  };

  return (
     <div className="employee-details-container">
          <div className="button-group">
            <button onClick={() => setActiveTab('insert')}>Insert Information</button>
            <button onClick={() => setActiveTab('update')}>Update Information</button>
            <button onClick={() => setActiveTab('search')}>Search Employee</button>
            <button onClick={() => setActiveTab('appeal')}>Appeal Option</button>
            <button onClick={() => setActiveTab('transferOption')}> Transfer Option</button>
            <button onClick={() => setActiveTab('view')}>View Information</button>
          </div>
          {activeTab === 'insert' && <div>View Information form goes here</div>}
          {activeTab === 'update' && <div>Update Information form goes here</div>}
          {activeTab === 'search' && <div>Search for Employee</div>}
          {activeTab === 'appeal' && <div>Appeal Option</div>}
          {activeTab === 'transferOption' && <div>View transfer option form goes here</div>}
          {activeTab === 'view' &&  renderForm()}
        </div>
  );
};

export default ViewTransfer;
