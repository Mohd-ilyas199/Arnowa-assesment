import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import "../ArnowaAssignment/login.css";

export const Login = ({ handleadd }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isvalid, setIsvalid] = useState(true);
  const [issucces, setIsucces] = useState(false);

  useEffect(() => {
    if (username.length >= 5 && password.length >= 6) {
      setIsvalid(false);
    } else setIsvalid(true);
  }, [username, password]); //dependecy array of useEffect

  return (
    <div>
      {issucces ? (
        <p>logged in</p>
      ) : (
        <Card className="card1">
          <img src="arnowa.png" alt="" className="img1" />{" "}
          <Row>
            <Col md="10">
              <h1 className="head">
                <b>Log in</b>
              </h1>
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="user name"
                className="from1"
              ></Form.Control>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                className="from1"
              ></Form.Control>
              <br></br>
              <Button disabled={isvalid} onClick={() => handleadd(username)}>
                LOGIN
              </Button>
              &nbsp; &nbsp; <Button>CANCEL</Button>
            </Col>
          </Row>
          <br />
          <p>
            <b>
              Dont have an account? <a href="/">sign up</a>{" "}
            </b>{" "}
          </p>
        </Card>
      )}
    </div>
  );
};
