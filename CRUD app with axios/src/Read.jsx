import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const Read = () => {
  const [data, setdata] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    document.title = "Read Data";
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => console.log("error"));
  }, []);
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="bg-light rounded p-4 shadow-sm">
              <h4 className="mb-3">User Information</h4>
              <p className="mb-0">
                <strong>ID:</strong> 1
              </p>
              <p className="mb-1">
                <strong>Name:</strong> {data.name}
              </p>
              <p className="mb-1">
                <strong>Email:</strong> {data.email}
              </p>
              <p className="mb-1">
                <strong>Phone number:</strong> {data.phone}
              </p>
              <Link to={`/update/${data.id}`}>
                <div className="btn btn-primary m-3">Update</div>
              </Link>
              <Link to="/">
                <div className="btn btn-secondary m-3">Back</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
