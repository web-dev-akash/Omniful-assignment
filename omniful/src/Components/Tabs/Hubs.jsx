import React from "react";
import { useSelector } from "react-redux";
import {
  Badge,
  Col,
  Fade,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import { HubsData } from "./HubsData";

export const Hubs = ({ openSidebar }) => {
  const state = useSelector((state) => state);
  const { opposite } = state;
  return (
    <div
      style={
        !opposite
          ? {
              width: openSidebar ? "78%" : "120%",
              transition: "all 0.3s linear",
              backgroundColor: "#fafafa",
            }
          : {
              width: openSidebar ? "1202px" : "1467px",
              height: "100vh",
              transition: "all 0.3s linear",
              backgroundColor: "#fafafa",
              position: "absolute",
              right: openSidebar ? "335px" : "70px",
            }
      }
    >
      <div>
        <Fade>
          <h3
            style={
              !opposite
                ? {
                    margin: "26px 0 0 16px",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                  }
                : {
                    margin: "26px 0 0 16px",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                    position: "absolute",
                    right: "25px",
                  }
            }
          >
            Hubs
          </h3>
          <Nav
            tabs
            horizontal={opposite ? "end" : ""}
            style={
              !opposite
                ? {
                    padding: "14px 0 0 16px",
                    cursor: "pointer",
                    borderBottom: "1px solid #5468FA1A",
                  }
                : {
                    padding: "60px 16px 0 0px",
                    cursor: "pointer",
                    borderBottom: "1px solid #5468FA1A",
                  }
            }
          >
            <NavItem onClick={() => handleTabPane("1")}>
              <NavLink className={"activeNavItemDiv"}>
                All Hubs
                <Badge
                  pill
                  color={"primary"}
                  style={{
                    marginLeft: "5px",
                    color: "white",
                  }}
                >
                  3
                </Badge>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab="1">
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <HubsData openSidebar={openSidebar} />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Fade>
      </div>
    </div>
  );
};
