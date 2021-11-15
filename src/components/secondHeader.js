import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import banner1 from "../pic/banner1.jpg";
import { useHistory } from "react-router";

function SecondHeader(props) {
  const history = useHistory();
  const navStatistics = () => {
    history.push("/Statistics");
  };
  const nav = () => {
    history.push("/adminHome");
  };
  const navlogin = () => {
    history.push("/login");
  };
  return (
    <div
      id="banner-area"
      className="banner-area"
      style={{
        backgroundImage: `url(${banner1})`,
      }}
    >
      <div className="banner-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-heading">
                <h1 className="banner-title">{props.props}</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a onClick={nav}>Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a onClick={navStatistics}>Statistics</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a onClick={navlogin}>Logout</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHeader;
