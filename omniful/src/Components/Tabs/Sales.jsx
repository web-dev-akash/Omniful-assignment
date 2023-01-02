import React from "react";
import shopify from "/shopify.png";
import eldokan from "/eldokan.png";
import zid from "/zid.png";
import panda from "/panda.png";
import woo from "/woo.png";
import magento from "/magento.png";
import opencart from "/opencart.png";
import arabic from "/arabic.png";

export const Sales = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          margin: "24px 0 5px 16px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "20px",
            backgroundColor: "#FFC82A",
          }}
        ></div>
        <div>
          <h1
            style={{
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#222222",
            }}
          >
            Sales Channels (8)
          </h1>
        </div>
      </div>
      <div className="gridMainDiv">
        <div className="gridInner">
          <div
            style={{
              width: "57px",
              height: "20px",
              background: "rgba(40, 199, 111, 0.12)",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "18px",
              textAlign: "center",
              color: "#28C76F",
            }}
          >
            Active
          </div>

          <img src={shopify} alt="" />
          <div>
            <p>Custom Name</p>
            <h3>Shopify</h3>
          </div>
        </div>
        <div className="gridInner">
          <div
            style={{
              width: "57px",
              height: "20px",
              background: "rgba(40, 199, 111, 0.12)",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "18px",
              textAlign: "center",
              color: "#28C76F",
            }}
          >
            Active
          </div>
          <img src={eldokan} alt="" />
          <div>
            <p>Custom Name</p>
            <h3>Dokan</h3>
          </div>
        </div>
        <div className="gridInner">
          <div
            style={{
              width: "57px",
              height: "20px",
              background: "rgba(40, 199, 111, 0.12)",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "18px",
              textAlign: "center",
              color: "#28C76F",
            }}
          >
            Active
          </div>
          <img src={zid} alt="" />
          <div>
            <p>Custom Name</p>
            <h3>Zid</h3>
          </div>
        </div>
        <div className="gridInner">
          <div
            style={{
              width: "57px",
              height: "20px",
              background: "rgba(40, 199, 111, 0.12)",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "18px",
              textAlign: "center",
              color: "#28C76F",
            }}
          >
            Active
          </div>
          <img src={panda} alt="" />
          <div>
            <p>Custom Name</p>
            <h3>Panda</h3>
          </div>
        </div>
        <div className="gridInner">
          <div
            style={{
              width: "57px",
              height: "20px",
              background: "rgba(40, 199, 111, 0.12)",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "18px",
              textAlign: "center",
              color: "#28C76F",
            }}
          >
            Active
          </div>
          <img src={woo} alt="" />
          <div>
            <p>Custom Name</p>
            <h3>Woocommerce</h3>
          </div>
        </div>
        <div className="gridInner">
          <div
            style={{
              width: "57px",
              height: "20px",
              background: "#F9E7E7",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "18px",
              textAlign: "center",
              color: "#EA5455",
            }}
          >
            Inactive
          </div>
          <img src={magento} alt="" />
          <div>
            <p>Custom Name</p>
            <h3>Magento</h3>
          </div>
        </div>
        <div className="gridInner">
          <div
            style={{
              width: "57px",
              height: "20px",
              background: "rgba(40, 199, 111, 0.12)",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "18px",
              textAlign: "center",
              color: "#28C76F",
            }}
          >
            Active
          </div>
          <img src={opencart} alt="" />
          <div>
            <p>Custom Name</p>
            <h3>Opencart</h3>
          </div>
        </div>
        <div className="gridInner">
          <div
            style={{
              width: "57px",
              height: "20px",
              background: "rgba(40, 199, 111, 0.12)",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "18px",
              textAlign: "center",
              color: "#28C76F",
            }}
          >
            Active
          </div>
          <img src={arabic} alt="" />
          <div>
            <p>Custom Name</p>
            <h3>Salla</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
