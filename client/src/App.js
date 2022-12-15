import { useState, useEffect } from "react";
import "./app.css";
import axios from "axios";
import Details from "./components/Details";
import Payment from "./components/Payment";

function App() {
  const [page, setPage] = useState(1);
  const [err, seterr] = useState("");
  const FormTitles = ["Details", "Payment"];

  const [data, setData] = useState({
    name: "",
    age: null,
    gender: "",
    batch: "",
  });
 
  const [userdata, setuserdata] = useState([]);

  const DispalyPage = () => {
    if (page == 1) {
      return <Details data={data} setData={setData} />;
    } else {
      return <Payment data={data} setData={setData} />;
    }
  };

  useEffect(() => {
    axios.get("https://fmaapi.onrender.com/api/get").then((responce) => {
      setuserdata(responce.data);
      console.log(responce.data);
    });
  }, []);

  const CompletePayment = async () => {
    await axios
      .post("https://fmaapi.onrender.com/api/registration", {
        name: data.name,
        gender: data.gender,
        age: data.age,
        batch: data.batch,
      })
      .then(
        alert("Registration Successfull !"),
        setData({ name: "", age: null })
      );
  };

  return (
    <div className="App">
      <h1>Admission form for the Yoga Classes</h1>

      <div className="form">
        {DispalyPage()}
        <p className="err">{err}</p>
      </div>

      <div className="btn">
        <button
          className={page === 1 ? "none" : ""}
          onClick={() => {
            if (page === 1) {
            }
            setPage((currentPage) => currentPage - 1);
          }}
        >
          Previous
        </button>

        <button
          onClick={() => {
            if (page === FormTitles.length) {
              CompletePayment();
              setPage(1);
            } else {
              if (Number(data.age) < 17 && Number(data.age > 65)) {
                seterr(
                  "Only people within the age limit of 18-65 can enroll for the monthly classes"
                );
              } else if (
                data.name === "" ||
                data.batch === "" ||
                data.gender === ""
              ) {
                seterr("Fill all the fields");
              } else {
                setPage((currentPage) => currentPage + 1);
                seterr("");
              }
            }
          }}
        >
          {page === FormTitles.length ? "Pay and Register" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default App;

// {/* <div className="list">
//         <h3>data</h3>
//         {userdata.map((item, key) => {
//           return (
//             <>
//               <p key={item.name}>
//                 name: {item.name} | age: {item.age}
//               </p>
//             </>
//           );
//         })}
//       </div> */}
