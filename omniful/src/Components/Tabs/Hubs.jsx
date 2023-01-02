import React from "react";
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

export const Hubs = () => {
  return (
    <div
      style={{
        width: "78%",
        backgroundColor: "#fafafa",
      }}
    >
      <div>
        <Fade>
          <h3
            style={{
              margin: "26px 0 0 16px",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
            }}
          >
            Hubs
          </h3>
          <Nav
            tabs
            style={{
              padding: "14px 0 0 16px",
              cursor: "pointer",
              borderBottom: "1px solid #5468FA1A",
            }}
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
                  <HubsData />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Fade>
      </div>
    </div>
  );
};
