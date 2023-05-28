import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    document.title = "CRUD ";
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => console.log("error"));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("DO YOU WANT TO DELETE THIS");
    if (confirm) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((res) => {
          location.reload();
          setdata(res.data);
        })
        .catch((err) => console.log("error"));
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="col-12 text-center mt-5">Todo List</h1>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-end">
              <Link to="/create" className="btn btn-primary">
                + Add
              </Link>
            </div>
            <table className="table table-striped table">
              <thead className="thead-dark">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => (
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.phone}</td>
                    <td className="d-flex justify-content-evenly">
                      <Link to={`/read/${d.id}`} className="btn btn-info">
                        View
                      </Link>

                      <Link to={`/update/${d.id}`} className="btn btn-primary">
                        Edit
                      </Link>

                      <button
                        onClick={(e) => handleDelete(d.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
