import React from "react";
import { Collapse, Fade } from "reactstrap";
import { useSelector } from "react-redux";

export const SalesSidebar = ({ image, salesTab }) => {
  const state = useSelector((state) => state);
  const { opposite } = state;
  return (
    <Fade>
      <Collapse
        horizontal
        isOpen={salesTab}
        style={
          !opposite
            ? {
                position: "absolute",
                right: "0",
                top: "58px",
                background: "white",
                width: "270px",
                height: "99vh",
                borderLeft: "2px solid #5468FA1A",
              }
            : {
                position: "absolute",
                left: "0",
                top: "0",
                background: "white",
                width: "270px",
                height: "99vh",
                borderRight: "2px solid #5468FA1A",
              }
        }
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
