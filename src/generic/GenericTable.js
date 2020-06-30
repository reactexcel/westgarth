import React from "react";
import { Table } from "react-bootstrap";

function GenericTable(props) {
  const {
    headerData,
    list,
    tableListData,
    className,
    rowStyle,
    extraProps,
    index,
    pagination,
    borderless
  } = props;
  return (
    <>
      <Table borderless={borderless} className={className} responsive>
        <thead>
          <tr>
            {headerData &&
              headerData.map((list, index) => {
                let title = list;
                let className = "";
                if (list && typeof list === "object") {
                  title = list.title;
                  className = !list.priority ? "priority-1" : "";
                }
                return (
                  <th
                    className={className}
                    key={index + title}
                    dangerouslySetInnerHTML={{ __html: title }}
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
      {pagination ? (
        <nav aria-label="Page navigation" className="bg-white pb-2">
          <hr className="mt-0" />
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                <span className="priority-1">&lt;</span> Prev 10
              </a>
            </li>
            <li className="page-item priority-1">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item priority-1">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item priority-1">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next 10 <span className="priority-1">&gt;</span>
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
}
export default GenericTable;
