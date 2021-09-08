import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Dashboard from "./Dashboard";
import { Login } from "./Login";
export const Assingnment = () => {
  const [data, setdata] = useState([]);

  const handleAdd = (ele) => {
    setdata([...data, ele]);
    localStorage.setItem("data", data);
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Sign in">
          <Login handleAdd={handleAdd} />
        </Tab>
        <Tab eventKey="profile" title="Dashboard">
          <Dashboard />
        </Tab>
      </Tabs>
    </div>
  );
};
