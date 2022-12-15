import React from "react";

const Details = ({ data, setData }) => {
  return (
    <div className="form">
      <div className="input">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        />
      </div>
      <div className="input">
        <label htmlFor="gender">Gender</label>
        <select
          onChange={(e) => {
            setData({ ...data, gender: e.target.value });
          }}
        >
          <option>Select Gender</option>
          <option value={"Male"}>Male</option>
          <option value={"Female"}>Female</option>
        </select>
      </div>
      <div className="input">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          value={data.age}
          onChange={(e) => {
            setData({ ...data, age: e.target.value });
          }}
        />
      </div>
      <div className="input">
        <label htmlFor="session">Batch</label>
        <select
          name="session"
          id="session"
          onChange={(e) => {
            setData({ ...data, session: e.target.value });
          }}
        >
          <option>Select Batch</option>
          <option value={"6-7 AM"}>6-7 AM</option>
          <option value={"7-8 AM"}>7-8 AM</option>
          <option value={"8-9 AM"}>8-9 AM</option>
          <option value={"5-6 AM"}>5-6 PM</option>
        </select>
      </div>
    </div>
  );
};

export default Details;
