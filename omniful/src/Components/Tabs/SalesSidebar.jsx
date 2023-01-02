import React from "react";
import { Collapse, Fade } from "reactstrap";
export const SalesSidebar = ({ image, salesTab }) => {
  return (
    <Fade>
      <Collapse
        horizontal
        isOpen={salesTab}
        style={{
          position: "absolute",
          right: "0",
          top: "58px",
          background: "white",
          width: "270px",
          height: "99vh",
        }}
      >
        <div
          style={{
            height: "130px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={image} alt="sales-pic" />
        </div>
      </Collapse>
    </Fade>
  );
};
