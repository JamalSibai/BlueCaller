// import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import React, { Component, useState, useEffect } from "react";

import AdminHeader from "../components/adminheader";
import Footer from "../components/footer";
import SecondHeader from "../components/secondHeader";
import Appointment from "../components/appointments";
import ReactLoading from "react-loading";
import { useHistory } from "react-router";

function FreelancerAppointment() {
  const [data, setData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    getAppointments();
    if (!localStorage.getItem("freelancer_id")) {
      // window.location.href = "/login";
      history.push("/login");
    }
  }, []);

  const filterData = (idsent) => {
    console.log("infap");
    const newData = data.filter((data) => data.id !== idsent);
    setData(newData);
  };
  const getAppointments = async () => {
    await axios
      .post(
        `https://bluecaller.tk/api/auth/getfreelancerAppointments`,
        {
          freelancer_id: localStorage.getItem("freelancer_id"),
        },
        {
          headers: {
            Authorization: " bearer" + localStorage.getItem("token"),
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setData(res.data);
      });
  };

  return data ? (
    <div>
      <AdminHeader />
      <SecondHeader props={"Freelancer Appointments"} />
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="col-12">
            {/* <h2 className="section-title">Freelancers</h2> */}
            <h3 className="section-sub-title">Freelancer Appointments</h3>
          </div>
          <div className="row">
            {data.map((item) => (
              <Appointment props={item} key={item.id} filterData={filterData} />
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

export default FreelancerAppointment;
