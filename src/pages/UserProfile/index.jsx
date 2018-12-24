import React from "react";

import Header from "containers/Header";
import Menu from "./Menu";
import Account from "./Account";
import Preference from "./Preference";
import Notification from "./Notification";
import Localization from "./Localization";
import SideBar from '../../containers/Sidebar'

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SideBar open={true} />
        <Menu />
        <Account />
        <Preference />
        <Notification />
        <Localization />
      </div>
    );
  }
}

export default UserProfile;
