import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

function Row(props) {
  return (
    <tr>
      {/* <th scope="row"></th> */}
      <td>{props.props.User.name}</td>
      <td>{props.props.User.email}</td>
      <td>{props.props.count}</td>
      <td>{props.props.countFinished}</td>
      <td>{props.props.count - props.props.countFinished}</td>
    </tr>
  );
}

export default Row;
