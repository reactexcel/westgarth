import React from "react";
import { Pie } from "react-chartjs-2";
import { Row, Col } from "react-bootstrap";

export default function Graph({ title }) {
  return (
    <div className="bg-white">
      <h6>{title}</h6>
      <div className="d-flex flex-wrap">
        <Col className="bg-grey-dark text-center">Bottles</Col>
        <Col className="bg-grey-dark text-center">Value</Col>
      </div>
      <Pie
        width={100}
        height={70}
        data={{
          // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132)",
                "rgba(54, 162, 235)",
                "rgba(255, 206, 86)",
                "rgba(75, 192, 192)",
                "rgba(153, 102, 255)",
                "rgba(255, 159, 64)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
      <div className="d-flex flex-wrap">
        <Col className="bg-grey-dark text-center">Email PDF</Col>
        <Col className="bg-grey-dark text-center">Email XLS</Col>
      </div>
    </div>
  );
}
