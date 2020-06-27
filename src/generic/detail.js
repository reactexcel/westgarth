import React from "react";
import { Card } from "react-bootstrap";
function Detail({...props}) {
  return (
    <div className={`detail-data ${props.className}`}>
      <Card>
        <Card.Body>
          <Card.Title className={`${props.headerClassName}`}>{props.header}</Card.Title>
          {props.cardBody}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Detail;
