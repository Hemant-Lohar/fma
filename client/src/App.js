import { useState, useEffect } from "react";
import "./app.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [session, setSession] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");

  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    axios.get("https://fma-api.onrender.com/api/get").then((responce) => {
      setuserdata(responce.data);
      console.log(responce.data);
    });
  }, []);

  const register = async () => {
    await axios
      .post("https://fma-api.onrender.com/api/registration", {
        name: name,
        gender: gender,
        age: age,
        session: session,
      })
      .then(alert("Registration Successfully !")).then(
        setName(""),
        setAge()
      );
  };

  return (
    <div className="App">
      <h1>Admission form for the Yoga Classes</h1>

      <div className="form">
        <div className="input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="gender">Gender</label>
          <select onChange={(e) => setGender(e.target.value)}>
            <option>Gender</option>
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
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="session">session</label>
          <select
            name="session"
            id="session"
            onChange={(e) => {
              setSession(e.target.value);
            }}
          >
            <option value={"6-7 AM"}>6-7 AM</option>
            <option value={"7-8 AM"}>7-8 AM</option>
            <option value={"8-9 AM"}>8-9 AM</option>
            <option value={"5-6 AM"}>5-6 PM</option>
          
          </select>
          
        </div>

        <p>Monthly fee: 500/- Rs</p>

        <button onClick={register}>Register</button>
      </div>

      {/* <div className="list">
        <h3>data</h3>
        {userdata.map((item, key) => {
          return (
            <>
              <p key={item.name}>
                name: {item.name} | age: {item.age}
              </p>
            </>
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
