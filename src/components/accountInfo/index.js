import React, { useState, useEffect } from "react";

import Navbar from "../../generic/navbar";
import { useDispatch, useSelector } from "react-redux";
import Detail from "../../generic/detail";
import Field from "../../generic/field";
import GenericTable from "../../generic/genericTable";
import * as actions from "../../redux/action";
const AccountInfo = () => {
  const dispatch = useDispatch();

  const accountData = useSelector(state => state.accountInfo);
  console.log(accountData, "nnn");

  useEffect(() => {
    dispatch(actions.getAccountInfoRequest());
  }, []);

  const info = (
    <>
      {accountData && accountData.data && accountData.data.account_info ? (
        <div className="d-flex">
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
          <div className="col-md-6">
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
  const invoiceList = listItem => {
    return (
      <>
        <td>{listItem.date}</td>
        <td>{listItem.order_no}</td>
        <td dangerouslySetInnerHTML={{ __html: listItem.wine }} />
        <td></td>
        <td></td>
        <td>{listItem.qty}</td>
        <td>{listItem.price}</td>
        <td>{listItem.receipt}</td>
        <td>{listItem.invoice}</td>
        <td>{listItem.delivery}</td>
      </>
    );
  };
  const invoiceInfo = (
    <>
      {accountData && accountData.data && accountData.data.invoices ? (
        <GenericTable
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
            "DELIVERY"
          ]}
          tableListData={accountData.data.invoices}
        />
      ) : null}
    </>
  );

  return (
    <div className="accounInfoPage">
      <Navbar />
      <div className="d-sm-flex py-4">
        <Detail
          header={"ACCOUNT INFORMATION"}
          cardBody={info}
          className={"col-md-6 col-12"}
          headerClassName="light-brown-color"
        />
        <Detail
          header={"STORAGE DETAILS"}
          cardBody={storageInfo}
          className={"col-md-6 col-12"}
          headerClassName="light-brown-color"
        />
      </div>
      <Detail
        header={"INVOICES"}
        cardBody={invoiceInfo}
        className={"col-md-12 col-12"}
        headerClassName="light-brown-color"
      />
    </div>
  );
};

export default AccountInfo;
