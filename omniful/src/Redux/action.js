import { useDispatch } from "react-redux";
import { GET_ARABIC, GET_HUBS } from "./actionTypes";
export const getHubs = (payload) => ({
  type: GET_HUBS,
  payload,
});

export const setOpposite = (payload) => ({
  type: GET_ARABIC,
  payload,
});

export const hubsData = [
  {
    name: "Jeddah",
    status: true,
    address: "Ansar Hospital, hadiqat Rami, Al Zahra, Jeddah",
  },
  {
    name: "Makkah",
    status: true,
    address: "Makkah Mall, King Abdullah road",
  },
  {
    name: "Riyadh",
    status: false,
    address: "Ring Road, Plot 18, Riyadh Jeddah Highway",
  },
];
