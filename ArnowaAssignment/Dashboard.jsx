import React from "react";
import { Card } from "react-bootstrap";
import "./login.css";
const Dashboard = ({ username }) => {
  return (
    <div>
      <h1>WELCOME {username}</h1>
      <Card className="c1">
        <img src="./users1.png" alt="not found"></img>
      </Card>
    </div>
  );
};

export default Dashboard;
