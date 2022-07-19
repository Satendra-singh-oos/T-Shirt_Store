import React from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper/index";
import { Link } from "react-router-dom";
const UserDashBoard = () => {
  const {
    user: { name, email, role }
  } = isAutheticated();

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">User Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Name:</span> {name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Email:</span> {email}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Your role:</span>{role}
          </li>

          <li className="list-group-item">
            <span className="badge badge-danger">User Area</span>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Base
      title="Welcome to User Dashboard"
      description="Manage all of your Details here"
      className="container bg-success p-4"
    >
      <div className="row">
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default UserDashBoard;
