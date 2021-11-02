// import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";
import ReactLoading from "react-loading";

import AdminsHeader from "../components/adminheader";
import Footer from "../components/footer";
import SecondHeader from "../components/secondHeader";
import Row from "../components/row";

function Statistics() {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState("");
  const [done, setDone] = useState("");
  const [pieData, setPieData] = useState("");
  let sum = 0;
  let sumDone = 0;

  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Regions",
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: false,
      },
    },
    series: [
      {
        name: "",
        color: "#006600",
        lineWidth: 1,
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 3,
          states: {
            hover: {
              enabled: true,
              lineWidth: 1,
            },
          },
        },
        data: [
          {
            y: 23,
            sliced: false,
            name: "Akkar",
            color: "#003f5c",
          },
          {
            y: 33,
            name: "Baalbeck-Hermel",
            sliced: false,
            color: "#2f4b7c",
          },
          {
            y: 100,
            name: "Beirut",
            sliced: false,
            color: "#665191",
          },
          {
            y: 53,
            name: "Mount Lebanon",
            sliced: false,
            color: "#a05195",
          },
          {
            y: 53,
            name: "Bekaa",
            sliced: false,
            color: "#d45087",
          },
          {
            y: 30,
            name: "North Lebanon",
            sliced: false,
            color: "#f95d6a",
          },
          {
            y: 10,
            name: "Nabatiyeh",
            sliced: false,
            color: "#ff7c43",
          },
          {
            y: 60,
            name: "South Lebanon",
            sliced: false,
            color: "#ffa600",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    getPieData();
    getStat();
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
  }, []);

  const getStat = async () => {
    await axios
      .get(`https://bluecaller.tk/api/auth/get-satistics-info`, {
        headers: {
          Authorization: " bearer" + localStorage.getItem("token"),
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        for (let i = 0; i < res.data.length; i++) {
          if (sum == 0) {
            sum = res.data[i].count;
          } else {
            sum += res.data[i].count;
          }
        }
        setTotal(sum);
        for (let i = 0; i < res.data.length; i++) {
          if (sumDone == 0) {
            sumDone = res.data[i].countFinished;
          } else {
            sumDone += res.data[i].countFinished;
          }
        }
        setDone(sumDone);
      });
  };

  const getPieData = async () => {
    await axios
      .get(`https://bluecaller.tk/api/auth/freelancer-region`, {
        headers: {
          Authorization: " bearer" + localStorage.getItem("token"),
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setPieData(res.data);
      });
  };

  return data ? (
    <div>
      <AdminsHeader />
      <SecondHeader props={"Statistics"} />
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="col-12">
            <h3 className="section-sub-title">Statistics</h3>
          </div>
          <div className="row">
            <div className="col-md-6">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">App.</th>
                    <th scope="col">App. Done</th>
                    <th scope="col">App. togo</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <Row props={item} key={item.User.id} />
                  ))}
                  <tr>
                    {/* <th scope="col"></th> */}
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">{total}</th>
                    <th scope="col">{done}</th>
                    <th scope="col">{total - done}</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <div>
                <PieChart highcharts={Highcharts} options={options} />
              </div>
            </div>
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

export default Statistics;
