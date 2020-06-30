import React from "react";
import { Card } from "react-bootstrap";
function Detail(props) {
  return (
    <div className={`detail-data ${props.className}`}>
      <Card className="border-0">
        <Card.Body className={props.bodyClassName}>
          <Card.Title className={`${props.headerClassName}`}>
            <span className={props.headerTitleClassName}>{props.header}</span>
            {props.headerContent}
          </Card.Title>
          {props.headerLine ? <hr /> : null}
          {props.cardBody}
          {props.cardFooter ? (
            <>
              <hr />
              {props.cardFooter}
            </>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Detail;
