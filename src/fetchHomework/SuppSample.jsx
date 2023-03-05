import React, { useEffect, useState } from 'react'

function SuppSample() {

    const [supplierList, setsupplierList] = useState([]);

    useEffect(() => {
      loadSuppliers();
    }, [])
    
    const loadSuppliers = () => {
        fetch('https://northwind.vercel.app/api/suppliers')
        .then(response => response.json())
        .then(data => setsupplierList(data));
    }

    const deleteItem = (id) => {
        let filteredData = supplierList.filter(q => q.id !== id);
        setsupplierList(filteredData);
    } 

    return (
        <>
            <div className='w3-table w3-striped w3-border'>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Contact Title</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        supplierList.map((item) => {
                            return <tr key={item.id}>
                                <td>{item.companyName}</td>
                                <td>{item.contactName}</td>
                                <td>{item.contactTitle}</td>
                                <td>{item.address?.city}</td>
                                <td><button onClick={() => deleteItem(item.id)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </div>
        </>
      )
}

export default SuppSample