import React, { useEffect } from "react";
import Navbar from "../../generic/navbar";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/action";
import Detail from "../../generic/Detail";
import Graph from "../../generic/Graph";

export default function Dashboard() {
  const dispatch = useDispatch();

  const dashboardData = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(actions.getRequest());
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mt-5">
        <h5>All Wine</h5>
        <Detail
          className="bg-grey"
          cardBody={
            <div className="row">
              <div className="col-lg-3">
                <div className="dashboard-card-title">
                  Bottles in Collection
                </div>
                <div className="dashboard-card-title">Items Due in</div>
                <div className="dashboard-card-title">Total Market Value</div>
                <div className="dashboard-card-title">Account Balance</div>
                <div className="dashboard-card-title">Gain/Loss All Wine</div>
              </div>
              <div className="col-lg-3">
                <Graph />
              </div>
              <div className="col-lg-3">
                <Graph />
              </div>
              <div className="col-lg-3">
                <Graph />
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
