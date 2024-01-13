import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './All.css'; 

const All = () => {
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/showAll");
      const data = response.data.data;

      setUserData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div className="all-container">
      {
        userData.map((ele, index) => (
          <div className="user-card" key={index}>
            <div>
              <h2>{ele.name}</h2>
              <p>User Name: {ele.username}</p>
              <p>ID: {ele.id}</p>
              <p>Email: {ele.email}</p>
              <p>Contact No.: {ele.phone}</p>
              <p>Website: {ele.website}</p>
            </div>

            <div className="address-section">
              <h3>Address</h3>
              <p>Street: {ele.address.street}</p>
              <p>House No.: {ele.address.suite}</p>
              <p>City: {ele.address.city}</p>
              <p>Zipcode: {ele.address.zipcode}</p>
            </div>

            <div className="company-section">
              <h3>Company</h3>
              <p>Company Name: {ele.company.name}</p>
              <p>Catch Phrase: {ele.company.catchPhrase}</p>
              <p>Business: {ele.company.bs}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default All;
