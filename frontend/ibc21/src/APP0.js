import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Reports from "./components/GetAllReports";

import axios from "axios"
import { useState, useEffect } from "react";
import "./App.css";

function AllReports() {
  const [report, setReport] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/reports")
      .then((response) => {
        console.log(response.data);
        setReport(response.data)
        console.log(report)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="App">
          <div >
      {report.map((report) => (
        <Reports {...report} />
      ))}

   
    </div>
      </div>
    </>
  );
}
export default AllReports;
