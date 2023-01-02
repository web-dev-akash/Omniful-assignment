import React, { useState } from "react";
import flag1 from "/flag1.png";
import flag2 from "/flag2.png";
import flag3 from "/flag3.png";

import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

export const NavigationBar = () => {
  return (
    <div>
      <nav className="navbarDiv">
        <div className="quickLinks">
          <span className="material-icons">add_link</span>
          <span className="quickText">Quick Links</span>
          <span className="material-icons arrow">expand_more</span>
        </div>
        <div className="dropdownDiv">
          <div>
            <UncontrolledDropdown className="me-2" direction="down">
              <DropdownToggle caret id="dropDown">
                <img src={flag1} alt="flag-pic" />
                English
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem id="dropDownFlag">
                  <img src={flag2} alt="flag-pic" />
                  Hindi
                </DropdownItem>
                <DropdownItem id="dropDownFlag">
                  <img src={flag3} alt="flag-pic" />
                  Arabic
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
        <div className="roundIcons">
          <span className="material-icons-round">notifications_none</span>
        </div>
        <div className="roundIcons helpIcon">
          <span className="material-icons-round">help_outline</span>
        </div>
      </nav>
    </div>
  );
};
