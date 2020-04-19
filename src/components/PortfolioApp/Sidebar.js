import React from "react";
import { Link } from "gatsby";

function Sidebar(props) {
  return (
    <aside {...props}>
      <Link to="/portfolio/2">Project 2</Link>
    </aside>
  );
}

export default Sidebar;
