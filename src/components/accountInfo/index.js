import React, { useState, useEffect } from "react";

import Navbar from "../../generic/navbar";
import { useDispatch, useSelector } from "react-redux";
import Detail from "../../generic/Detail";
import Field from "../../generic/field";
import GenericTable from "../../generic/GenericTable";
import * as actions from "../../redux/action";
import { Modal, Form, Col, Row } from "react-bootstrap";
const AccountInfo = () => {
  const dispatch = useDispatch();

  const [openEditContact, setEditContact] = useState(false);
  const [openChangeAddress, setChangeAddress] = useState(false);

  const accountData = useSelector((state) => state.accountInfo);

  useEffect(() => {
    dispatch(actions.getAccountInfoRequest());
  }, []);

  const info = (
    <>
      {accountData && accountData.data && accountData.data.account_info ? (
        <div className="row">
          <div className="col-md-6">
            <Field
              text={accountData.data.account_info.name}
              heading="Account Name"
            />
            <Field
              text={accountData.data.account_info.email}
              heading="Account Email"
            />
            <Field text={accountData.data.account_info.phone} heading="Phone" />
          </div>
          <div className="col-md-6">
            <Field
              text={accountData.data.account_info.account_number}
              heading="Account Number"
            />
          </div>
        </div>
      ) : null}
    </>
  );
  const storageInfo = (
    <>
      {accountData && accountData.data && accountData.data.storage ? (
        <div className="d-flex">
          <div className="col-md-6 same-col-height">
            <Field
              text={
                <>
                  <div>
                    {`${accountData.data.storage.address_line1}
                    ${accountData.data.storage.address_line2}`}
                  </div>
                  <div>
                    {`${accountData.data.storage.city} , 
                    ${accountData.data.storage.zip}`}
                  </div>
                  <div>{`${accountData.data.storage.country}`}</div>
                </>
              }
              heading="Account Name"
            />
          </div>
          <div className="col-md-6">
            <Field
              text={accountData.data.storage.storage_account}
              heading="Storage Account"
            />
            <Field
              text={accountData.data.storage.date}
              heading="Storage Billing"
            />
          </div>
        </div>
      ) : null}
    </>
  );

  const invoiceList = (listItem) => {
    return (
      <>
        <td>{listItem.date}</td>
        <td>{listItem.order_no}</td>
        <td dangerouslySetInnerHTML={{ __html: listItem.wine }} />
        <td></td>
        <td></td>
        <td>{listItem.qty}</td>
        <td>${listItem.price}</td>
        <td className="text-light-brown">{listItem.receipt}</td>
        <td className="text-light-brown">{listItem.invoice}</td>
        <td className="text-light-brown">{listItem.delivery}</td>
      </>
    );
  };

  const mobileInvoiceList = (listItem) => (
    <>
      <td dangerouslySetInnerHTML={{ __html: listItem.wine }} />
      <td>{listItem.qty}</td>
      <td>${listItem.price}</td>
    </>
  );

  const invoiceInfo = (
    <>
      {accountData && accountData.data && accountData.data.invoices ? (
        <>
          <div className="d-md-none">
            {accountData.data.invoices.map((invoice, i) => {
              return (
                <div key={i}>
                  <div className="d-flex justify-content-around mb-2">
                    <div>
                      <span className="mobile-invoice-title">DATE :</span>{" "}
                      {invoice.date}
                    </div>
                    <div>
                      <span className="mobile-invoice-title">ORDER :</span>{" "}
                      {invoice.order_no}
                    </div>
                  </div>
                  <hr className="hr-short" />
                  <GenericTable
                    borderless
                    list={mobileInvoiceList}
                    headerData={["WINE", "QTY", "PRICE"]}
                    tableListData={[invoice]}
                  />
                  <hr className="hr-short" />
                  <div className="d-flex justify-content-around mb-2">
                    <div>
                      <span className="mobile-invoice-title">RECEIPT :</span>{" "}
                      {invoice.receipt}
                    </div>
                    <div>
                      <span className="mobile-invoice-title">INVOICE :</span>{" "}
                      {invoice.invoice}
                    </div>
                  </div>
                  <hr className="hr-short" />
                  <div className="d-flex justify-content-around mb-2">
                    <div>
                      <span className="mobile-invoice-title">DELIVERY :</span>{" "}
                      {invoice.delivery}
                    </div>
                  </div>
                  <hr className="hr-thick" />
                </div>
              );
            })}
          </div>
          <GenericTable
            className="d-none d-md-table"
            list={invoiceList}
            headerData={[
              "DATE ",
              "ORDER",
              "WINE",
              "",
              "",
              "QTY",
              "PRICE",
              "RECEIPT",
              "INVOICE",
              "DELIVERY",
            ]}
            tableListData={accountData.data.invoices}
          />
        </>
      ) : null}
    </>
  );

  return (
    <div className="accounInfoPage">
      <Navbar />
      <div className="row py-4">
        <Detail
          header={"ACCOUNT INFORMATION"}
          cardBody={info}
          className={"col-md-6 col-12 mb-3"}
          headerClassName="text-light-brown"
          cardFooter={
            <div
              className="d-flex justify-content-end cursor-pointer btn-sm text-light-brown"
              onClick={() => setEditContact(true)}
            >
              Edit
            </div>
          }
        />
        <Detail
          header={"STORAGE DETAILS"}
          cardBody={storageInfo}
          className={"col-md-6 col-12 mb-3"}
          headerClassName="text-light-brown"
          cardFooter={
            <div
              className="d-flex justify-content-end cursor-pointer btn-sm text-light-brown"
              onClick={() => setChangeAddress(true)}
            >
              Edit
            </div>
          }
        />
        <Detail
          header={"INVOICES"}
          cardBody={invoiceInfo}
          className={"col-md-12 col-12"}
          headerClassName="text-light-brown"
          cardFooter={
            <div className="d-flex justify-content-end text-light-brown">
              <span className="cursor-pointer btn-sm">Download XLS</span>
              <span className="cursor-pointer btn-sm ml-2">View All</span>
            </div>
          }
        />
      </div>
      <Modal show={openEditContact}>
        <Detail
          headerLine
          header={"EDIT CONTACT INFORMATION"}
          headerClassName="text-light-brown"
          cardBody={
            <Form className="form-wrapper">
              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  Name :
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  Email :
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="email" />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  Phone :
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="number" />
                </Col>
              </Form.Group>
            </Form>
          }
          cardFooter={
            <div
              className="d-flex justify-content-end cursor-pointer btn-sm text-light-brown"
              onClick={() => setEditContact(false)}
            >
              Save
            </div>
          }
        />
      </Modal>
      <Modal show={openChangeAddress}>
        <Detail
          headerLine
          header={"CHANGE ADDRESS"}
          headerClassName="text-light-brown"
          cardBody={
            <>
              <Form>
                <div className="d-flex justify-content-center">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="BILLING ADDRESS"
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      BILLING ADDRESS
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="SHIPPING ADDRESS"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      SHIPPING ADDRESS
                    </label>
                  </div>
                </div>
                <hr />
                <div className="form-wrapper">
                  <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                      Street :
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                      State :
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                      ZIP :
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                      Country :
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>
                </div>
              </Form>
            </>
          }
          cardFooter={
            <div
              className="d-flex justify-content-end cursor-pointer btn-sm text-light-brown"
              onClick={() => setChangeAddress(false)}
            >
              Save
            </div>
          }
        />
      </Modal>
    </div>
  );
};

export default AccountInfo;
