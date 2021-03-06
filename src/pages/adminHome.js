import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import AdminHeader from "../components/adminheader";
import Footer from "../components/footer";
import SecondHeader from "../components/secondHeader";
import FreelancerCard from "../components/freelancerCard";
import ReactLoading from "react-loading";
import { useHistory } from "react-router";

function AdminHome() {
  const [data, setData] = useState(null);
  const history = useHistory();
  useEffect(() => {
    console.log(localStorage.getItem("token"));
    getFreelancers();
    // console.log("token", token);
    if (!localStorage.getItem("token")) {
      // window.location.href = "/login";
      history.push("/login");
    }
  }, []);

  const getFreelancers = async () => {
    await axios
      .get(`https://bluecaller.tk/api/auth/getallfreelancers`, {
        headers: {
          Authorization: " bearer" + localStorage.getItem("token"),
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setData(res.data);
      });
  };

  function remove(idsent) {
    console.log("in adminHome" + idsent);
    const newdata = data.filter((requests) => requests.id != idsent);
    setData(newdata);
    console.log(newdata);
  }

  return data ? (
    <div>
      <AdminHeader />
      <SecondHeader props={"Admin"} />
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="col-12">
            <h3 className="section-sub-title">Freelancers </h3>
          </div>
          <div className="row">
            {data.map((item) => (
              <FreelancerCard props={item} key={item.id} function={remove} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  ) : (
    <ReactLoading
      type={"bars"}
      color={"#ffa600"}
      height={100}
      width={100}
      className="pie"
    />
  );
}

export default AdminHome;
