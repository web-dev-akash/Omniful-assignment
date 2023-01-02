import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHubs, hubsData } from "../../Redux/action";

export const HubsData = ({ openSidebar }) => {
  const data = hubsData;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { hubs, opposite } = state;
  useEffect(() => {
    dispatch(getHubs(data));
  }, []);
  return (
    <div
      style={
        !opposite
          ? {
              margin: "26px 0 0 16px",
              display: "flex",
              transition: "all 0.3s ease-in-out",
              gap: openSidebar ? "10px" : "150px",
            }
          : {
              margin: "26px 0 0 16px",
              display: "flex",
              flexDirection: "row-reverse",
              transition: "all 0.3s ease-in-out",
              gap: openSidebar ? "10px" : "150px",
            }
      }
    >
      {hubs.map(({ name, status, address }) => (
        <div
          key={name}
          style={{
            cursor: "pointer",
            width: "374px",
            padding: "16px",
            background: "white",
            borderRadius: "6px",
          }}
        >
          <div
            style={{
              height: "30px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  background: status ? "#28C76F" : "#D9D9D9",
                  height: "27px",
                  width: "4px",
                }}
              ></div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "27px",
                  color: "#222222",
                }}
              >
                {name}
              </div>
              <div
                style={{
                  height: "18px",
                  width: "auto",
                  padding: "0 8px",
                  background: status ? "rgba(40, 199, 111, 0.12)" : "#F7F7F7",
                  borderRadius: "17px",
                  fontSize: "12px",
                  fontWeight: 600,
                  lineHeight: "18px",
                  color: status ? "#28C76F" : "#999999",
                }}
              >
                {status ? "Active" : "Inactive"}
              </div>
            </div>
            <div>
              <span className="material-icons-outlined">more_vert</span>
            </div>
          </div>
          <div
            style={{
              height: "35px",
              display: "flex",
              gap: "14px",
              margin: "18px 0",
            }}
          >
            <div
              style={{
                height: "35px",
                background: "#F7F7F7",
                width: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              <span className="material-icons-outlined">location_on</span>
            </div>
            <div
              style={{
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "18px",
                color: "#333333",
              }}
            >
              <div>{address}</div>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#999999",
                  marginTop: "3px",
                }}
              >
                Makkah, Saudi Arabia
              </div>
            </div>
          </div>
          <div
            style={{
              height: "35px",
              display: "flex",
              gap: "14px",
              margin: "18px 0",
            }}
          >
            <div
              style={{
                height: "35px",
                background: "#F7F7F7",
                width: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              <span className="material-icons-outlined">calendar_month</span>
            </div>
            <div
              style={{
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "18px",
                color: "#333333",
              }}
            >
              <div>
                Sunday (Today){" "}
                <span
                  style={{
                    fontSize: "12px",
                  }}
                  className="material-icons-outlined"
                >
                  expand_more
                </span>
              </div>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#999999",
                  marginTop: "3px",
                }}
              >
                10:00AM to 6:00PM . 01:00PM to 6:00PM
              </div>
            </div>
          </div>
          <div
            style={{
              height: "35px",
              display: "flex",
              gap: "14px",
              margin: "18px 0",
            }}
          >
            <div
              style={{
                height: "35px",
                background: "#F7F7F7",
                width: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              <span className="material-icons-outlined">phone_in_talk</span>
            </div>
            <div
              style={{
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "18px",
                color: "#333333",
              }}
            >
              <div>+966-2777588235</div>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#999999",
                  marginTop: "3px",
                }}
              >
                Jeddahhub.Panda@Hyperpanda.com
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
