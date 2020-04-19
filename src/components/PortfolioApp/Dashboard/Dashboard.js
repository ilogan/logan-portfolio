import React from "react";

function Dashboard(props) {
  return <div {...props}>{props.children}</div>;
}

export default Dashboard;
