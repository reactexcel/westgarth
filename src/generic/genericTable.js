import React from "react";
import { Table } from "react-bootstrap";
function genericTable({ ...props }) {
  const {
    headerData,
    list,
    tableListData,
    className,
    rowStyle,
    extraProps,
    index
  } = props;
  return (
    <Table className={className} responsive>
      <thead>
        <tr>
          {headerData &&
            headerData.map((list, index) => {
              return (
                <th
                  key={index + list}
                  dangerouslySetInnerHTML={{ __html: list }}
                />
              );
            })}
        </tr>
      </thead>
      <tbody>
        {tableListData && tableListData.length > 0 ? (
          tableListData.map((listItem, index) => {
            return (
              <tr
                key={`${index}-${listItem.name || listItem.id || ""}`}
                style={rowStyle ? rowStyle : {}}
              >
                {list(listItem, rowStyle ? rowStyle : {}, index, extraProps)}
              </tr>
            );
          })
        ) : (
          <tr>
            <td
              colSpan={headerData ? headerData.length : "12"}
              className="text-center "
            >
              "No Available Data"
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
export default genericTable;