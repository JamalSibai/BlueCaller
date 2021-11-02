import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import banner1 from "../pic/banner1.jpg";

function SecondHeader(props) {
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
                      <a href="/adminHome">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/Statistics">Statistics</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/login">Logout</a>
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
