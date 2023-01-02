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
import { useDispatch, useSelector } from "react-redux";
import { setOpposite } from "../../Redux/action";

export const NavigationBar = () => {
  const state = useSelector((state) => state);
  let { opposite } = state;
  const dispatch = useDispatch();
  const handleOpposite = () => {
    opposite ? dispatch(setOpposite(false)) : dispatch(setOpposite(true));
  };
  console.log(opposite);
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
                <img src={opposite ? flag3 : flag1} alt="flag-pic" />
                {opposite ? "Arabic" : "English"}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem id="dropDownFlag">
                  <img src={flag2} alt="flag-pic" />
                  Hindi
                </DropdownItem>
                <DropdownItem id="dropDownFlag" onClick={handleOpposite}>
                  <img src={opposite ? flag1 : flag3} alt="flag-pic" />
                  {opposite ? "English" : "Arabic"}
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
