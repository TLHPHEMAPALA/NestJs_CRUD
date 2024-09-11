import React from "react";
import Create_User from "./Create_User";
import'./Home.css';

const Home = () => {
  return (
    <div>
      <div className="container">
        <h1>Users List</h1>
        <div className="users">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
