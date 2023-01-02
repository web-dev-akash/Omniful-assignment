import React, { useContext, useState } from "react";
import shopify from "/shopify.png";
import eldokan from "/eldokan.png";
import zid from "/zid.png";
import panda from "/panda.png";
import woo from "/woo.png";
import magento from "/magento.png";
import opencart from "/opencart.png";
import arabic from "/arabic.png";
import { SalesSidebar } from "./SalesSidebar";

export const Sales = ({ openSidebar }) => {
  const [image, setImage] = useState("");
  const [salesTab, setSalesTab] = useState(false);

  const handleSalesClick = (image) => {
    setImage(image);
    setSalesTab(!salesTab);
  };
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
      <div
        style={{
          paddingInline: "20px",
          display: "grid",
          gridTemplateColumns: openSidebar
            ? "repeat(6, 1fr)"
            : "repeat(7, 1fr)",
          gap: "12px",
        }}
      >
        <div className="gridInner" onClick={() => handleSalesClick(shopify)}>
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

          <img src={shopify} alt="sales-pic" />
          <div>
            <p>Custom Name</p>
            <h3>Shopify</h3>
          </div>
        </div>
        <div className="gridInner" onClick={() => handleSalesClick(eldokan)}>
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
          <img src={eldokan} alt="sales-pic" />
          <div>
            <p>Custom Name</p>
            <h3>Dokan</h3>
          </div>
        </div>
        <div className="gridInner" onClick={() => handleSalesClick(zid)}>
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
          <img src={zid} alt="sales-pic" />
          <div>
            <p>Custom Name</p>
            <h3>Zid</h3>
          </div>
        </div>
        <div className="gridInner" onClick={() => handleSalesClick(panda)}>
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
          <img src={panda} alt="sales-pic" />
          <div>
            <p>Custom Name</p>
            <h3>Panda</h3>
          </div>
        </div>
        <div className="gridInner" onClick={() => handleSalesClick(woo)}>
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
          <img src={woo} alt="sales-pic" />
          <div>
            <p>Custom Name</p>
            <h3>Woocommerce</h3>
          </div>
        </div>
        <div className="gridInner" onClick={() => handleSalesClick(magento)}>
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
          <img src={magento} alt="sales-pic" />
          <div>
            <p>Custom Name</p>
            <h3>Magento</h3>
          </div>
        </div>
        <div className="gridInner" onClick={() => handleSalesClick(opencart)}>
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
          <img src={opencart} alt="sales-pic" />
          <div>
            <p>Custom Name</p>
            <h3>Opencart</h3>
          </div>
        </div>
        <div className="gridInner" onClick={() => handleSalesClick(arabic)}>
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
          <img src={arabic} alt="sales-pic" />
          <div>
            <p>Custom Name</p>
            <h3>Salla</h3>
          </div>
        </div>
      </div>
      {salesTab ? <SalesSidebar image={image} salesTab={salesTab} /> : null}
    </div>
  );
};
