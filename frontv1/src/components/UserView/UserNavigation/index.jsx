import React from "react";
import AnalyticsIcon from "../../shared/icons/AnalyticsIcon";
import HomeIcon from "../../shared/icons/HomeIcon";
import MessengerIcon from "../../shared/icons/MessengerIcon";
import WorkerIcon from "../../shared/icons/WorkerIcon";
import LogoutIcon from "../../shared/icons/LogoutIcon";
import { Link } from "react-router-dom";
import "./styles.css";

import { connect } from "react-redux";
import { logout } from "../../../actions/authActions";

const UserNavigation = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        background: "gainsboro",
        padding: "1rem",
        border: "1px solid gainsboro"
      }}
      className="nav-menu"
    >
      <Link to="/">
        <HomeIcon />
      </Link>
      <Link to="/works">
        <WorkerIcon />
      </Link>
      <Link to="/statistics">
        <AnalyticsIcon />
      </Link>
      <Link onClick={() => props.logout(props.authReducer.user)} to="/">
        <LogoutIcon />
      </Link>
    </div>
  );
};

const mapStateToProps = store => ({
  authReducer: store.authReducer
});

export default connect(mapStateToProps, { logout })(UserNavigation);
