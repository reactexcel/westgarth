import React, { useEffect, useState } from "react";
import Navbar from "../../generic/navbar/index";
import Detail from "../../generic/Detail";
import { Form, Row, Col, Button } from "react-bootstrap";
import * as actions from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import GenericTable from "../../generic/GenericTable";

export default function Collection() {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState(false);

  const accountData = useSelector((state) => state.collection);

  useEffect(() => {
    dispatch(actions.getCollectionRequest());
  }, []);

  const collectionList = (listItem, style, index) => {
    let statusField = listItem.status;
    if (listItem.status == "Live Offer") {
      statusField = <span className="bg-success">{listItem.status}</span>;
    } else if (listItem.status == "Sold") {
      statusField = <span className="bg-danger">{listItem.status}</span>;
    } else if (listItem.status == "Sell") {
      statusField = (
        <Button variant="outline-success" className="input-btn">
          {listItem.status}
        </Button>
      );
    }
    return (
      <>
        <td className="priority-1">{listItem.uuid}</td>
        <td>
          <div className="text-light-brown">{listItem.wine}</div>
          <div>
            {listItem.vintage} {listItem.unit}
          </div>
        </td>
        <td>{listItem.status}</td>
        <td className="priority-1">{listItem.cost}</td>
        <td className="priority-1">${listItem.market_price}</td>
        <td className="priority-1">{listItem.gain}</td>
        <td className="priority-1">{listItem.gain_percent}</td>
      </>
    );
  };

  const collectionInfo = (
    <>
      {accountData && accountData.data && accountData.data ? (
        <GenericTable
          list={collectionList}
          headerData={[
            { title: "UUID", priority: false },
            "WINE / VINTAGE / UNIT",
            "STATUS",
            { title: "COST", priority: false },
            { title: "MARKET PRICE", priority: false },
            { title: "GAIN", priority: false },
            { title: "% GAIN", priority: false },
          ]}
          tableListData={accountData.data}
          className="bg-white mb-0"
          pagination
        />
      ) : null}
    </>
  );

  return (
    <div>
      <Navbar />
      <Detail
        header={"WINE COLLECTION"}
        className="mt-5"
        bodyClassName="p-0 bg-sm-none"
        headerClassName=" d-flex justify-content-between text-light-brown p-4  flex-column flex-md-row align-items-center"
        headerTitleClassName="page-title"
        headerContent={
          <>
            <div className="d-flex justify-content-between mt-3 input-filters">
              <input
                className="input-search"
                type="text"
                placeholder="Search"
              />
              <Form.Group className="d-md-flex d-none ml-4 align-items-center">
                <Form.Label className="mb-0">LOCATION:</Form.Label>
                <Form.Control as="select" className="input-select">
                  <option value=""></option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="d-md-flex d-none ml-4 align-items-center">
                <Form.Control as="select" className="input-select">
                  <option value="VIEW 25">VIEW 25</option>
                  <option value="VIEW 50">VIEW 50</option>
                  <option value="VIEW 100">VIEW 100</option>
                </Form.Control>
              </Form.Group>
              <i
                onClick={() => setFilter(true)}
                className={`fa fa-filter d-md-none ml-3 ${filter ? "d-none" : ""}`}
                aria-hidden="true"
              ></i>
            </div>
            {filter ? (
              <div className="d-md-none justify-content-center">
                <div className="d-flex mt-3">
                  <div className="mobile-filter">Location</div>
                  <div className="mobile-filter ml-2">View 5</div>
                </div>
                <div
                  className="border-0 close-mobile-filter"
                  onClick={() => setFilter(false)}
                >
                  <i className="fa fa-times-circle-o mr-2" aria-hidden="true"></i>
                  CLOSE FILTERS
                </div>
              </div>
            ) : null}
          </>
        }
        cardBody={collectionInfo}
      />
    </div>
  );
}
