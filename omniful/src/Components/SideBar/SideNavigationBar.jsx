import React, { useContext, useState } from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Badge,
  Card,
  CardBody,
  Col,
  Collapse,
  Fade,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledAccordion,
} from "reactstrap";
import { Hubs } from "../Tabs/Hubs";
import { Sales } from "../Tabs/Sales";
import logo from "/omniful.png";
export const SideNavigationBar = () => {
  const [openSidebar, setIsOpenSidebar] = useState(false);
  const [openTab, setOpenTab] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [hub, setHub] = useState(false);
  const handleCollapse = () => {
    setIsOpenSidebar(!openSidebar);
  };
  const handleOpenTab = () => {
    setOpenTab(!openTab);
    setHub(false);
  };
  const handleTabPane = (id) => {
    setActiveTab(id);
  };
  const handleHub = () => {
    setHub(!hub);
    setOpenTab(false);
  };
  return (
    <div className="sidebarMain">
      <div className="sideBar">
        <div className="sidebarImage">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <span className="material-icons-outlined">home</span>
        </div>
        <div>
          <span className="material-icons-outlined">paid</span>
        </div>
        <div>
          <span className="material-icons-outlined">insights</span>
        </div>
        <div>
          <span className="material-icons-outlined">inventory_2</span>
        </div>
        <div>
          <span className="material-icons-outlined">airline_seat_flat</span>
        </div>
        <div>
          <span className="material-icons-outlined">category</span>
        </div>
        <div>
          <span className="material-icons-outlined">
            account_balance_wallet
          </span>
        </div>
        <div onClick={handleCollapse}>
          <span className="material-icons-outlined">settings</span>
        </div>
        <div>
          <span className="material-icons-outlined">group</span>
        </div>
        <div>
          <span className="material-icons-outlined">policy</span>
        </div>
        <div className="sidebarDivider">
          <span></span>
        </div>
        <div>
          <span className="material-icons-outlined">contact_support</span>
        </div>
        <div>
          <span className="material-icons-outlined">logout</span>
        </div>
      </div>
      <div>
        <Collapse horizontal isOpen={openSidebar} className="collapseMainDiv">
          <h1>Settings</h1>
          <div
            onClick={handleCollapse}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "25px",
              height: "24px",
              cursor: "pointer",
              border: "2px solid #EAECFB",
              boxShadow: "0px 0px 4px rgba(84, 104, 250, 0.25)",
              borderRadius: "4px",
              background: "white",
              top: "-38px",
              left: "252px",
            }}
          >
            <span
              style={{
                color: "#5468FA80",
                fontSize: "11px",
              }}
              className="material-icons"
            >
              arrow_back_ios
            </span>
            <span
              style={{
                color: "#5468FA80",
                fontSize: "10px",
                margin: "-5px",
              }}
              className="material-icons"
            >
              arrow_back_ios
            </span>
          </div>
          <Card
            style={{
              width: "266px",
              border: "#5468FA1A",
              height: "100vh",
            }}
          >
            <CardBody
              style={{
                display: "flex",
                margin: 0,
                padding: 0,
              }}
            >
              <UncontrolledAccordion
                style={{
                  width: "266px",
                  borderRight: "2px solid #5468FA1A",
                }}
                defaultOpen={["1"]}
                stayOpen
              >
                <AccordionItem
                  style={{
                    border: "none",
                  }}
                >
                  <AccordionHeader targetId="1" id="accordion">
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: 0,
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Apps & Integration</span>
                  </AccordionHeader>
                  <AccordionBody
                    onClick={handleOpenTab}
                    accordionId="1"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Sales channel Apps</span>
                  </AccordionBody>
                  <AccordionBody
                    accordionId="1"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Shipping Apps</span>
                  </AccordionBody>
                  <AccordionBody
                    accordionId="1"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>POS Apps</span>
                  </AccordionBody>
                  <AccordionBody
                    accordionId="1"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>ERP Apps</span>
                  </AccordionBody>
                  <AccordionBody
                    accordionId="1"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>SMS</span>
                  </AccordionBody>
                  <AccordionBody
                    accordionId="1"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Payments</span>
                  </AccordionBody>
                  <AccordionBody
                    accordionId="1"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>WhatsApp Business</span>
                  </AccordionBody>
                  <AccordionBody
                    accordionId="1"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Other Apps</span>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem
                  style={{
                    border: "none",
                  }}
                >
                  <AccordionHeader targetId="2" id="accordion">
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: 0,
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Omniful App settings</span>
                  </AccordionHeader>
                  <AccordionBody
                    accordionId="2"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Picker App</span>
                  </AccordionBody>
                  <AccordionBody
                    accordionId="2"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Driver App</span>
                  </AccordionBody>
                  <AccordionBody
                    accordionId="2"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Put-Away & Inventory</span>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem
                  style={{
                    border: "none",
                  }}
                >
                  <AccordionHeader targetId="3" id="accordion">
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: 0,
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Hub Management</span>
                  </AccordionHeader>
                  <AccordionBody
                    onClick={handleHub}
                    accordionId="3"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Hubs</span>
                  </AccordionBody>
                  <AccordionBody
                    accordionId="3"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Locations</span>
                  </AccordionBody>
                  <AccordionBody
                    accordionId="3"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Bins</span>
                  </AccordionBody>
                  <AccordionBody
                    accordionId="3"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Consolidation area</span>
                  </AccordionBody>
                  <AccordionBody
                    accordionId="3"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Stations</span>
                  </AccordionBody>
                  <AccordionBody
                    accordionId="3"
                    className="accordionBody"
                    id="accordion"
                  >
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Hub settings</span>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem
                  style={{
                    border: "none",
                  }}
                >
                  <AccordionHeader targetId="4" id="accordion">
                    <span
                      className="material-icons-outlined"
                      style={{
                        marginLeft: 0,
                        marginRight: "5px",
                      }}
                    >
                      local_shipping
                    </span>
                    <span>Account settings</span>
                  </AccordionHeader>
                  <AccordionBody
                    accordionId="4"
                    className="accordionBody"
                  ></AccordionBody>
                </AccordionItem>
              </UncontrolledAccordion>
            </CardBody>
          </Card>
        </Collapse>
      </div>
      {openTab ? (
        <div
          style={{
            width: openSidebar ? "78%" : "120%",
            transition: "all 0.3s linear",
            backgroundColor: "#fafafa",
          }}
        >
          <Fade>
            <h3
              style={{
                margin: "26px 0 0 16px",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "20px",
              }}
            >
              Sales channel Apps
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
                <NavLink
                  className={activeTab === "1" ? "activeNavItemDiv" : ""}
                >
                  Integrated
                  <Badge
                    pill
                    color={activeTab === "1" ? "primary" : "secondary"}
                    style={{
                      marginLeft: "5px",
                      color: activeTab === "1" ? "white" : "#fbfbfb",
                    }}
                  >
                    12
                  </Badge>
                </NavLink>
              </NavItem>
              <NavItem onClick={() => handleTabPane("2")}>
                <NavLink
                  className={activeTab === "2" ? "activeNavItemDiv" : ""}
                >
                  All Channels
                  <Badge
                    pill
                    color={activeTab === "2" ? "primary" : "secondary"}
                    style={{
                      marginLeft: "5px",
                      color: activeTab === "2" ? "white" : "#fbfbfb",
                    }}
                  >
                    118
                  </Badge>
                </NavLink>
              </NavItem>
              <NavItem onClick={() => handleTabPane("3")}>
                <NavLink
                  className={activeTab === "3" ? "activeNavItemDiv" : ""}
                >
                  Coming soon
                  <Badge
                    pill
                    color={activeTab === "3" ? "primary" : "secondary"}
                    style={{
                      marginLeft: "5px",
                      color: activeTab === "3" ? "white" : "#fbfbfb",
                    }}
                  >
                    9
                  </Badge>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <Sales openSidebar={openSidebar} />
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Fade>
        </div>
      ) : null}
      {hub ? <Hubs openSidebar={openSidebar} /> : null}
    </div>
  );
};
