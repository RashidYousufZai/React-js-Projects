import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Create = () => {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const naviage = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log("res");
        naviage("/");
      })
      .catch((err) => console.log("error"));
  };
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <h1 className="text-center m-5">Enter Your data</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  onChange={(e) =>
                    setvalues({ ...values, name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
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
                  onChange={(e) =>
                    setvalues({ ...values, phone: e.target.value })
                  }
                />
              </div>
              <button type="submit" className="btn btn-primary my-3">
                Submit
              </button>
              <Link>
                <button type="button" className="btn btn-secondary m-3">
                  Back
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
