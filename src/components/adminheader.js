import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router";

function AdminHeader() {
  const history = useHistory();

  const nav = () => {
    history.push("/");
  };
  return (
    <header id="header" className="header-one">
      <div className="site-navigation">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-dark p-0">
                <div id="navbar-collapse" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav mr-auto">
                    <li className="nav-item dropdown active">
                      <a onClick={nav} className="nav-link dropdown-toggle">
                        BlueCaller
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
