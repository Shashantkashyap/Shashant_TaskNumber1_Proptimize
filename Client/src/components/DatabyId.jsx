import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./DatabyId.css"

function DatabyId() {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/dataById", { id });
      const dataa = response.data.data;
      setData(dataa);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch data only if id is not null
    if (id !== null) {
      fetchData();
    }
  }, [id]);

  console.log(data);

  return (
    <div>
      <div >
        <div className='option'>
          <label htmlFor="num">Select Id </label>
          <select name="id" id="num" onChange={(e) => setId(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>

      {data && (
        <div>
          <div>
            <h2>{data.name}</h2>
            <p>User Name: {data.username}</p>
            <p>ID: {data.id}</p>
            <p>Email: {data.email}</p>
            <p>Contact No.: {data.phone}</p>
            <p>Website: {data.website}</p>
          </div>

          <div className="address-section">
            <h3>Address</h3>
            <p>Street: {data.address.street}</p>
            <p>House No.: {data.address.suite}</p>
            <p>City: {data.address.city}</p>
            <p>Zipcode: {data.address.zipcode}</p>
          </div>

          <div className="company-section">
            <h3>Company</h3>
            <p>Company Name: {data.company.name}</p>
            <p>Catch Phrase: {data.company.catchPhrase}</p>
            <p>Business: {data.company.bs}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DatabyId;
