import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const naviage = useNavigate();
  const [values, setvalues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { id } = useParams();

  useEffect(() => {
    document.title = "Read Data";
    console.log(values);
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setvalues(res.data);
      })
      .catch((err) => console.log("error"));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:3000/users/" + id, values)
      .then((res) => {
        console.log(res);
        naviage("/");
      })
      .catch((err) => console.log("error"));
  };

  return (
    <div className="container ">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <h1 className="text-center m-5">Update Your data</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={values.name}
                onChange={(e) => setvalues({ ...values, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={(e) =>
                  setvalues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
                value={values.phone}
                onChange={(e) =>
                  setvalues({ ...values, phone: e.target.value })
                }
              />
            </div>
            <button type="submit" className="btn btn-primary my-3">
              Update
            </button>
            <Link to="/" className="btn btn-secondary">
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
